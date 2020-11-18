import React from "react";
import {
  View,
  TouchableHighlight,
  Image,
  Text,
  StyleSheet,
} from "react-native";

export default function Destination({ item }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => console.log(item.title)}>
        <Image
          source={{ uri: "https://i.imgur.com/8L4AiK9.jpg" }}
          style={{ width: 200, height: 200 }}
        />
        <Text>{item.title}</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#444",
    borderRadius: 10,
  },
});
