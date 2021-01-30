require("dotenv").config();
const express = require("express");
const geolib = require("geolib");
const { Client, TravelMode } = require("@googlemaps/google-maps-services-js");
const random = require("random");

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

  return response.data.snappedPoints[0].location;
};

//! error
const get_walking_directions = async (from, to) => {
  const response = await client.directions({
    params: {
      origin: from,
      destination: to,
      transit_mode: TravelMode.walking,
      key: process.env.GOOGLE_MAPS_API_KEY,
    },
    timeout: 1000,
  });

  console.log(response.data.routes[0].legs[0].steps);
};

//
const app = express();
const port = 3000;

app.use(express.json());

app.post("/", async (req, res) => {
  const center = req.body.location;
  const radius = req.body.radius || 10;

  const result = await random_point(center, radius);
  const aligned_result = await snap_to_road(result);

  //await get_walking_directions(center, aligned_result);

  res.send({ target: aligned_result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
