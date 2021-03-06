import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from "./screens/BottomTabs/Home";
import FavoriteScreen from "./screens/BottomTabs/Favorite";
import MoreScreen from "./screens/BottomTabs/More";
import { BaseColor } from "./configs/theme";
import AuthScreen from "./screens/AuthScreens/Auth";

const Tab = createBottomTabNavigator();

// import auth from "@react-native-firebase/auth";
LogBox.ignoreAllLogs();
export default function App() {
  // const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    setUser(user);
    // if (initializing) setInitializing(false);
  };
  async function readUser() {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }
  useEffect(() => {
    readUser();
  });

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === "Trang chủ") {
        iconName = "ios-home";
      } else if (route.name === "Yêu thích") {
        iconName = "ios-heart";
      } else if (route.name === "Thêm") {
        iconName = "ios-person";
      } else if (route.name === "Booking") {
        iconName = "ios-briefcase";
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  });

  const tabBarOptions = {
    activeTintColor: BaseColor.orangeColor,
    inactiveTintColor: "gray",
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}
      >
        <Tab.Screen component={HomeScreen} name="Trang chủ" />
        <Tab.Screen component={FavoriteScreen} name="Yêu thích" />
        <Tab.Screen component={MoreScreen} name="Thêm" />
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
