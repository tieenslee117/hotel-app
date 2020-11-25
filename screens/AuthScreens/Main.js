import React from "react";
// import * as Facebook from "expo-facebook";

import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-elements";
import { DefaultFont } from "../../configs/theme";

import Login from "./Login";
import { fbLogin } from "../../controllers/auth.js";
export default function Main({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Welcome</Text>
            <Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => fbLogin()}
              title="Login with Facebook"
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => navigation.navigate("Sign In")}
              title="Login"
            />
            <Text style={styles.text}>Or</Text>
            <Button
              buttonStyle={styles.registerButton}
              onPress={() => navigation.navigate("Sign Up")}
              title="Create account"
            />
            <Button
              buttonStyle={styles.registerButton}
              onPress={() => {
                console.log("log out");
                Facebook.logOutAsync();
              }}
              title="Log out"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    fontFamily: DefaultFont,

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
