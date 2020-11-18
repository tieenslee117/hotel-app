import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

export default function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const getCurrentLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };
  useEffect(() => {
    getCurrentLocation();
  }, [location]);
  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}