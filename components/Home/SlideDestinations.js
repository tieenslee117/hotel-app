import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { DefaultFont } from "../../configs/theme";

import Destination from "./Destination";
export default function SlideDestinations() {
  const destinations = [
    {
      uri: "https://i.imgur.com/S5VOZNm.jpg",
      title: "Ha Noi",
      property: 1234,
    },
    {
      uri: "https://i.imgur.com/IZSMJvT.jpg",
      title: "Da Nang",
      property: 4234,
    },
    {
      uri: "https://i.imgur.com/1MdWiBF.jpg",
      title: "Ho Chi Minh",
      property: 5433,
    },
    {
      uri: "https://i.imgur.com/M9Q7bzz.jpg",
      title: "Nha Trang",
      property: 1214,
    },
    {
      uri: "https://i.imgur.com/xFNYwtT.jpg",
      title: "Vung Tau",
      property: 2334,
    },
    {
      uri: "https://i.imgur.com/lQY3Ma9.jpg",
      title: "Da Lat",
      property: 3334,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Địa điểm hôm nay</Text>
      <ScrollView horizontal={true} style={styles.slide}>
        {destinations.map((des, i) => {
          return (
            <TouchableHighlight key={i}>
              <View style={styles.card}>
                <Image source={{ uri: des.uri }} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.text}>{des.title}</Text>
                  <Text style={styles.property}>{des.property} properties</Text>
                </View>
              </View>
            </TouchableHighlight>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: DefaultFont,
    backgroundColor: "#fff",
    // padding: 20,
    // margin: 20,
    // marginTop: -60,
    // borderRadius: 6,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3.5,
    // elevation : 5,
    height: 420,
  },
  card: {
    marginRight: 10,
    // padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  slide: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    margin: 4,
  },
  property: {
    fontSize: 16,
    color: "#aaa",
    margin: 4,
  },
  info: {
    // flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    padding: 6,
  },
  image: {
    width: 190,
    height: 230,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
