import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import {} from "react-native0-vector-icons/"

export default function showStar(n) {
  let stars = [];
  for (let i = 0; i < Math.floor(n); i++) {
    stars.push(
      <MaterialCommunityIcons name="star" color="#ffdd10" size={20} />
    );
  }
  if (Math.round(n) != n) {
    stars.push(
      <MaterialCommunityIcons name="star-half" color="#ffdd10" size={20} />
    );
  }
  // return <View>{/* {for(let i = 0)} */}</View>;
  return stars;
}
