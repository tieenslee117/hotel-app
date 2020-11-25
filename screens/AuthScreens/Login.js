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
  AsyncStorage,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { DefaultFont } from "../../configs/theme";

import { login } from "../../controllers/auth.js";
// import { TouchableHighlight } from "react-native-gesture-handler";

// import { forgetPassword } from "../../controllers/auth.js";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            {/* <Text style={styles.logoText}>Login</Text> */}
            <TextInput
              placeholder="Phone number"
              // placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Password"
              // placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />

            <Button
              buttonStyle={styles.loginButton}
              onPress={() => login()}
              title="Sign In"
            />
            <TouchableOpacity onPress={() => forgetPassword()}>
              <Text style={styles.forgetText}>Forget your password?</Text>
            </TouchableOpacity>
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
    marginTop: 100,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormView: {
    marginTop: 100,
    flex: 1,
  },
  loginFormTextInput: {
    height: 55,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#ddd",
    paddingLeft: 10,
    margin: 30,
    marginTop: 15,
    marginBottom: 12,
    color: "#000",
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 55,
    marginTop: 15,
    marginBottom: 15,
    margin: 30,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
  forgetText: {
    textAlign: "center",
    // fontWeight: "bold",
    color: "#888",
    marginTop: 10,
  },
});
