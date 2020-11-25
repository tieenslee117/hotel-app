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
import { BaseColor, DefaultFont } from "../../configs/theme";

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
  const images = [
    "https://imgur.com/QkiYaRE.jpg",
    "https://imgur.com/eXWQqGI.jpg",
    "https://imgur.com/ToW2oDY.jpg",
    "https://imgur.com/gcs07ZJ.jpg",
    "https://imgur.com/oO63hqH.jpg",
    "https://imgur.com/QValB0e.jpg",
    "https://imgur.com/quTQw9J.jpg",
    "https://imgur.com/qwNibWw.jpg",
    "https://imgur.com/pcS8WEF.jpg",
    "https://imgur.com/g9p4LUl.jpg",
    "https://imgur.com/IjMj6g7.jpg",
    "https://imgur.com/7uO2hxm.jpg",
    "https://imgur.com/1MxMxeN.jpg",
    "https://imgur.com/grgLc4I.jpg",
    "https://imgur.com/bZGoIjf.jpg",
    "https://imgur.com/wRigAWe.jpg",
    "https://imgur.com/kfMZUnU.jpg",
    "https://imgur.com/698auhd.jpg",
    "https://imgur.com/1WVtQbC.jpg",
  ];
  const test = 1;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Địa điểm nổi bật</Text>
      <ScrollView horizontal={true} style={styles.slide}>
        {destinations.map((des, i) => {
          return (
            <TouchableHighlight key={i}>
              <View style={styles.card}>
                <Image
                  source={{
                    uri: images[Math.floor(Math.random() * images.length)],
                  }}
                  style={styles.image}
                />
                <View style={styles.info}>
                  <Text style={styles.text}>{des.title}</Text>
                  <View style={styles.exploreBtn}>
                    <Text style={styles.exploreText}>Xem ngay</Text>
                  </View>
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
    height: 420,
  },
  card: {
    marginRight: 10,
    // padding: 10,
    borderRadius: 8,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3.5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 20,
    marginLeft: 20,
  },
  slide: {
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    margin: 4,
    color: "#fff",
    fontWeight: "500",
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
    marginTop: -80,
  },
  image: {
    width: 185,
    height: 250,
    borderRadius: 8,
  },
  exploreBtn: {
    backgroundColor: BaseColor.orangeColor,
    height: 28,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  exploreText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
