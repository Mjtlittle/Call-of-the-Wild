require("dotenv").config();
const express = require("express");
const geolib = require("geolib");
const {
  Client,
  TravelMode,
  TransitRoutingPreference,
} = require("@googlemaps/google-maps-services-js");
const random = require("random");
const polyline = require("google-polyline");

const random_point = (center, radius) => {
  const rand_angle = random.int(0, 360);
  const result = geolib.computeDestinationPoint(center, radius, rand_angle);
  return result;
};

const client = new Client({});
const snap_to_road = async (coord) => {
  const response = await client.snapToRoads({
    params: {
      path: [coord],
      key: process.env.GOOGLE_MAPS_API_KEY,
    },
    timeout: 1000,
  });

  // if there is no points to snap to return null
  if (response.data.snappedPoints === undefined) return null;

  // return the first snap point
  return response.data.snappedPoints[0].location;
};

const get_walking_steps = async (from, to) => {
  const response = await client.directions({
    params: {
      origin: from,
      destination: to,
      transit_mode: TravelMode.walking,
      transit_routing_preference: TransitRoutingPreference.less_walking,
      key: process.env.GOOGLE_MAPS_API_KEY,
    },
    timeout: 1000,
  });

  const legs = response.data.routes[0].legs;
  let all_steps = [];
  for (const leg of legs) {
    for (const step of leg.steps) {
      const points = polyline.decode(step.polyline.points);
      all_steps = all_steps.concat(points);
    }
  }

  const steps = all_steps.map(([latitude, longitude]) => ({
    latitude,
    longitude,
  }));

  return steps;
};

//
const app = express();
const port = 8080;

app.use(express.json());

app.post("/", async (req, res) => {
  const start = req.body.location;
  const radius = req.body.radius || 1000;

  const random_coord = await random_point(start, radius);
  const snapped_coord = await snap_to_road(random_coord);
  const final_coord = snapped_coord != null ? snapped_coord : random_coord;

  const steps = await get_walking_steps(start, final_coord);
  res.send({
    location: final_coord,
    radius,
    steps,
  });
});

app.listen(port, () => {
  console.log(
    `Call of the Wild Backend, listening at http://localhost:${port}`
  );
});
