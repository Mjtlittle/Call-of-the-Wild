import React, { createContext, useState, useEffect, useRef } from "react";
import * as Location from "expo-location";

export const LocationContext = createContext({});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const watchLocationRef = useRef(null);

  const getCoords = () => {
    if (location == null)
      return {
        longitude: 0,
        latitude: 0,
      };
    return {
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    };
  };

  useEffect(() => {
    // await support
    (async () => {
      // get permission to use location services
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // register location watcher, has to have app open
      // (alternative is harder, as android app has to be reviewed to user background loc. with startLocationUpdatesAsync)
      watchLocationRef.current = await Location.watchPositionAsync(
        { timeInterval: 100, distanceInterval: 0 },
        (location) => {
          setLocation(location);
        }
      );
    })();

    return async () => {
      console.log(watchLocationRef.current);
      if (watchLocationRef.current != null) watchLocationRef.current.remove();
      //await watchLocationRef.current;
      //await Location.stopLocationUpdatesAsync(location_task);
    };
  }, []);

  return (
    <LocationContext.Provider value={{ location, getCoords }}>
      {children}
    </LocationContext.Provider>
  );
};
