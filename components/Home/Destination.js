import React from "react";
import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { DefaultFont } from "../../configs/theme";

export default function Destination({ item }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log(item.title)}>
        <Image
          source={{ uri: "https://i.imgur.com/8L4AiK9.jpg" }}
          style={{ width: 200, height: 200 }}
        />
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    fontFamily: DefaultFont,
    backgroundColor: "#444",
    borderRadius: 10,
  },
});
