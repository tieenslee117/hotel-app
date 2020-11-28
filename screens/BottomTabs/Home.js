import React, { useState } from "react";
import {} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { DefaultFont } from "../../configs/theme";

import Init from "./Init";
import List from "./List";

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Init" component={Init} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
}
