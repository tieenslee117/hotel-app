import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Auth from "../AuthScreens/Auth";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultFont } from "../../configs/theme";

// import { getInformation } from "../../controllers/auth";

import Login from "../Login";
import Loading from "../Loading";
import User from "../User";

const Stack = createStackNavigator();

export default function More({ navigation }) {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      {/* <Stack.Screen component={Loading} name="Loading" /> */}
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={User} name="User" />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navBar: {
    backgroundColor: "#fff",
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 20,
    paddingRight: 25,
  },
  title: {
    fontSize: 20,
    color: "#000",
  },
  userInfo: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ddd",
    padding: 20,
    borderRadius: 10,
  },
  info: {
    flexDirection: "row",
  },
  textInfo: {
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
  },
  pos: {},
  logout: {
    flexDirection: "row",
  },
  fields: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "#222",
    borderBottomWidth: 2,
    margin: 20,
    marginTop: 0,
  },
  text: {
    fontSize: 17,
    color: "#222",
  },
  icon: {
    marginLeft: 20,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
});
