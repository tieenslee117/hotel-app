import * as Facebook from "expo-facebook";
import { APP_ID } from "../configs/key";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "../configs/firebase";
import "firebase/firestore";

// export const anonymousLogin = (navigation) => {
//   Alert.alert("you login anonymous");
// };
import { updateAuthedUser } from "../models/auth.js";

export const register = async (userInput) => {
  for (let key in userInput) {
    if (userInput[key].length === 0) {
      throw new Error(`${key} can't be empty!`);
    }
    if (userInput.password !== userInput.password2) {
      throw new Error(`Password not matched`);
    }
  }
  await firebase
    .auth()
    .createUserWithEmailAndPassword(userInput.email, userInput.password);
  firebase.auth().currentUser.sendEmailVerification();
  return true;
};

export const login = async (userInput) => {
  if (userInput.email.length === 0 || userInput.password === 0) {
    throw new Error("Email and password cannot be empty!");
  }
  const loginResult = await firebase
    .auth()
    .signInWithEmailAndPassword(userInput.email, userInput.password);
  if (!loginResult.user.emailVerified) {
    throw new Error("User is not verified! Please check your inbox!");
  }
  updateAuthedUser(loginResult.user.email);
  return true;
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log(firebase.auth().currentUser + "log out");
    });
};
// export const loginAnonymously = () => {
//   firebase
//     .auth()
//     .signInAnonymously()
//     .then(() => {
//       // Signed in..
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ...
//     });
// };

export const loginCustomToken = () => {
  firebase
    .auth()
    .signInWithCustomToken()
    .then(() => {});
};

export const fbLogin = async (navigation) => {
  try {
    await Facebook.initializeAsync({
      appId: APP_ID,
    });
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile", "email"],
    });
    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      const data = await response.json().then((data) => {
        console.log(data);
        return data;
      });
      const modifiedData = Object.values(data);
      console.log(modifiedData[0], modifiedData[1]);
      AsyncStorage.setItem("@token", token);
      AsyncStorage.setItem("name", modifiedData[0]);
      AsyncStorage.setItem(
        "avatar",
        `http://graph.facebook.com/${modifiedData[1]}/picture?type=normal`
      );

      const usersRef = firebase.firestore().collection("users").doc();

      usersRef.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          usersRef.onSnapshot((doc) => {
            // do stuff with the data
          });
        } else {
          usersRef.set({
            name: modifiedData[0],
            userId: modifiedData[1],
            favorite: [],
          }); // create the document
        }
      });

      navigation.navigate("User", {});
    } else {
      type === "cancel";
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
};

export const googleLogin = () => {
  //TODO : LOGIN WITH GOOGLE
};
