import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import formatPrice from "../helpers/format-price";
// import rateFromNum from "../helpers/rate-from-num";
export default function ListRoom({ list, navigation }) {
  // const handleNavigateDetail = (item) => {
  //   navigation.navigate("Detail", { item: item });
  // };
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => {
              console.log(item);
              // handleNavigateDetail(item);
            }}
          >
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
              <View style={styles.info}>
                <View style={styles.infoTop}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={styles.infoBottom}>
                  <Text style={styles.price}>{formatPrice(item.price)}đ</Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "#555",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
    elevation: 5,
    backgroundColor: "#fff",
    // padding: 10,
    margin: 15,
    marginBottom: 0,
    height: 140,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageContainer: {},
  image: {
    width: 100,
    height: 140,
    margin: 0,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  info: {
    padding: 10,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flex: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    color: "#ff383b",
  },
  ratingArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingDiv: {
    backgroundColor: "#66aa33",
    // width: "100%",
    borderRadius: 5,
    padding: 5,
  },
  ratingNum: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  ratingText: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  star: {
    flexDirection: "row",
  },
  reviews: {
    fontSize: 15,
    fontWeight: "700",
    color: "#bbb",
  },
  infoTop: {
    flex: 0.8,
    justifyContent: "space-between",
    marginLeft: 5,
    alignSelf: "flex-start",
  },
  infoBottom: {},
});
