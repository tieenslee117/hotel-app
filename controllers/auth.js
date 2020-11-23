import * as Facebook from "expo-facebook";
import { APP_ID } from "../constants/key";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../config/firebase";
export const login = () => {
  //TODO : LOGIN LOGIC
  console.log("you login!");
};

export const register = () => {
  //TODO : LOGIN LOGIC
  console.log("you register!");
};

export const forgetPassword = () => {
  //TODO : FORGET PASSWORD
  console.log("you forget password :) !");
};

export const fbLogin = async () => {
  try {
    await Facebook.initializeAsync({
      appId: APP_ID,
    });
    const {
      type,
      token,
      expirationDate,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
    });
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      console.log(await response.json());

      Alert.alert("Logged in!", `Hi ${await response.json()}!`);
    } else {
      type === "cancel";
    }
    AsyncStorage.setItem("@token", token);
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }

  // if (type === "success") {
  //   const response = await fetch(
  //     `https://graph.facebook.com/me?access_token=${token}`
  //   );
  //   Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
  // }
};

export const googleLogin = () => {
  //TODO : LOGIN WITH GOOGLE
};
