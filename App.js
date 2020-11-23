import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import HomeScreen from "./screens/BottomTabs/Home";
import FavoriteScreen from "./screens/BottomTabs/Favorite";
import MoreScreen from "./screens/BottomTabs/More";

import AuthScreen from "./screens/AuthScreens/Auth";

const Tab = createBottomTabNavigator();

// import auth from "@react-native-firebase/auth";

export default function App() {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // useEffect(() => {});

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === "Home") {
        iconName = "ios-home";
      } else if (route.name === "Favorite") {
        iconName = "ios-heart";
      } else if (route.name === "More") {
        iconName = "ios-person";
      } else if (route.name === "Booking") {
        iconName = "ios-briefcase";
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  });

  const tabBarOptions = {
    activeTintColor: "#FF383B",
    inactiveTintColor: "gray",
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}
      >
        <Tab.Screen component={AuthScreen} name="Auth" />
        <Tab.Screen component={HomeScreen} name="Home" />
        <Tab.Screen component={FavoriteScreen} name="Favorite" />
        <Tab.Screen component={MoreScreen} name="More" />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
