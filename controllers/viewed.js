import firebase from "../configs/firebase";

const storeViewed = (item) => {
  const viewed = firebase.firestore().collection("users").doc("viewed");
  viewed.set({
    ...item,
  });
};
const getViewed = async () => {
  let result = await firebase.firestore().collection("users").doc("viewed");
  return result;
};
