import React, { useState, useEffect } from "react";
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
import { Portal, Dialog, Paragraph } from "react-native-paper";
import { Button } from "react-native-elements";
import { fbLogin, anonymousLogin } from "../controllers/auth";
export default function Login({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("");
  const showDialog = () => {
    console.log("show dialog");
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Welcome</Text>
            <Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => fbLogin(navigation)}
              title="Login with Facebook"
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => showDialog()}
              title="Anonymous"
            />
            <View>
              <Portal>
                <Dialog visible={true} onDismiss={hideDialog}>
                  <Dialog.Title>Alert</Dialog.Title>
                  <Dialog.Content>
                    <Paragraph>Enter your name</Paragraph>
                  </Dialog.Content>
                  <TextInput
                    value={input}
                    onChangeText={(text) => setInput(text)}
                  />
                  <Dialog.Actions>
                    <Button onPress={hideDialog}>Submit</Button>
                  </Dialog.Actions>
                </Dialog>
              </Portal>
            </View>
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
