import React from "react";
// import * as Facebook from "expo-facebook";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
// import { appId } from "../../config/key";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./Main";
import Login from "./Login";
import Register from "./Register";

const Stack = createStackNavigator();

export default function Auth({ navigation }) {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Main} />
      <Stack.Screen name="Sign In" component={Login} />
      <Stack.Screen name="Sign Up" component={Register} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    // backgroundColor: "#3456",
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 15,
    marginBottom: 15,
    margin: 30,
  },
  registerButton: {
    backgroundColor: "rgb(100, 100, 100)",
    borderRadius: 5,
    height: 45,
    marginTop: 15,
    marginBottom: 15,
    margin: 30,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    marginBottom: 15,
    margin: 30,
    // backgroundColor: "transparent",
    backgroundColor: "#3b5998",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
