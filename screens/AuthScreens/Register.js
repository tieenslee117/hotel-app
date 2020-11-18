import React from "react";
import * as Facebook from "expo-facebook";
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
} from "react-native";
import { Button } from "react-native-elements";

import { register } from "../../controllers/auth";

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            {/* <Text style={styles.logoText}>Sign Up</Text> */}
            <TextInput
              placeholder="Phone number"
              // placeholderColor="#c4c3cb"
              style={styles.registerFormTextInput}
            />
            <TextInput
              placeholder="Username"
              // placeholderColor="#c4c3cb"
              style={styles.registerFormTextInput}
            />

            <TextInput
              placeholder="Password"
              // placeholderColor="#c4c3cb"
              style={styles.registerFormTextInput}
              secureTextEntry={true}
            />
            <TextInput
              placeholder="Confirm password"
              // placeholderColor="#c4c3cb"
              style={styles.registerFormTextInput}
              secureTextEntry={true}
            />
            <Button
              buttonStyle={styles.registerButton}
              onPress={() => register()}
              title="Sign Up"
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
    flex: 1,
    marginTop: 70,
  },
  registerFormTextInput: {
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
  },
  registerButton: {
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
});
