import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlgeuPs0E_0_zj3y9uXMhfQZz0APDQcYM",
  authDomain: "tripi-project-5f1.firebaseapp.com",
  databaseURL: "https://tripi-project-5f1.firebaseio.com",
  projectId: "tripi-project-5f1",
  storageBucket: "tripi-project-5f1.appspot.com",
  messagingSenderId: "1067118353466",
  appId: "1:1067118353466:web:8c9ccc703fdf0c0cd36903",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.database();
