import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import showStar from "../helpers/show-star";
import rateFromNum from "../helpers/rate-from-num";
import formatPrice from "../helpers/format-price";

import ListRoom from "../components/ListRoom";

export default function Detail({ route, navigation }) {
  const [listRoom, setListRoom] = useState([]);
  const list = [
    {
      name: "Khach san thu 1",
      image: "https://i.imgur.com/8L4AiK9.jpgc",
      price: 800000,
    },
    {
      name: "Khach san thu 2",
      image: "https://i.imgur.com/bz66PYo.jpg",
      price: 900000,
    },
    {
      name: "Khach san thu 3",
      image: "https://i.imgur.com/S5VOZNm.jpg",
      price: 1000000,
    },
    {
      name: "Khach san thu 4",
      image: "https://i.imgur.com/IZSMJvT.jpg",
      price: 1200000,
    },
    {
      name: "Khach san thu 5",
      image: "https://i.imgur.com/1MdWiBF.jpg",
      price: 1250000,
    },
    {
      name: "Khach san thu 6",
      image: "https://i.imgur.com/M9Q7bzz.jpg",
      price: 690000,
    },
    {
      name: "Khach san thu 7",
      image: "https://i.imgur.com/xFNYwtT.jpg",
      price: 1300000,
    },
    {
      name: "Khach san thu 8",
      image: "https://i.imgur.com/lQY3Ma9.jpg",
      price: 1000000000,
    },
  ];
  const showStar = (n) => {
    let stars = [];
    let i = 0;
    for (; i < Math.floor(n); i++) {
      stars.push(
        <MaterialCommunityIcons key={i} name="star" color="#ffdd10" size={20} />
      );
    }
    if (Math.round(n) != n) {
      stars.push(
        <MaterialCommunityIcons
          key={i}
          name="star-half"
          color="#ffdd10"
          size={20}
        />
      );
    }
    // return <View>{/* {for(let i = 0)} */}</View>;
    return stars;
  };
  const {
    name,
    image,
    star,
    rating,
    pos,
    price,
    numOfReviews,
  } = route.params.item;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: "https://i.imgur.com/8L4AiK9.jpg" }}
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.star}>{showStar(star)}</View>
          <Text style={styles.description}>
            This is a description of hotel, it is very very very very very very
            long
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.content}>
            <Text style={styles.label}>Đánh giá và xếp hạng</Text>
            <View style={styles.ratingContainer}>
              <View style={styles.ratingLeft}>
                <Text style={styles.ratingText}>{rating}</Text>
              </View>
              <View style={styles.ratingRight}>
                <Text style={styles.ratingRes}>{rateFromNum(rating)}</Text>
                <Text style={styles.reviews}>{numOfReviews} reviews</Text>
              </View>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Miêu tả chung</Text>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                This is a description of hotel, it is very very very very very
                very long
              </Text>
              <ScrollView horizontal={true} style={styles.services}>
                <View style={styles.service}>
                  <MaterialCommunityIcons
                    size={25}
                    name="wifi"
                    color="#ff383b"
                  />
                  <MaterialCommunityIcons
                    size={25}
                    name="wifi-off"
                    color="#ff383b"
                  />
                  <Text>wifi</Text>
                </View>

                <View style={styles.service}>
                  <MaterialCommunityIcons
                    size={25}
                    name="coffee"
                    color="#ff383b"
                  />
                  <MaterialCommunityIcons
                    size={25}
                    name="coffee-off"
                    color="#ff383b"
                  />
                  <Text>coffee</Text>
                </View>
                <View style={styles.service}>
                  <MaterialCommunityIcons
                    size={25}
                    name="paw"
                    color="#ff383b"
                  />
                  <MaterialCommunityIcons
                    size={25}
                    name="paw-off"
                    color="#ff383b"
                  />
                  <Text>paw</Text>
                </View>
                <View style={styles.service}>
                  <MaterialCommunityIcons
                    size={25}
                    name="swim"
                    color="#ff383b"
                  />
                  <Text>pool</Text>
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>Vị trí</Text>
            <View style={styles.locationContainer}>
              <MaterialCommunityIcons
                name="map-marker"
                color="#ff383b"
                size={20}
              />
              <Text style={styles.locationText}>{pos}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Thời gian</Text>
            <View style={styles.timeContainer}>
              <View style={styles.time}>
                <Text style={styles.timeLabel}>Check-in</Text>
                <Text style={styles.timeVal}>6:00</Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeLabel}>Check-out</Text>
                <Text style={styles.timeVal}>18:00</Text>
              </View>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Phòng của khách sạn</Text>
            <View style={styles.roomContainer}>
              <View style={styles.rooms}>
                <ListRoom list={list} navigation={navigation} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  mainContainer: {
    margin: 20,
  },
  content: {
    marginBottom: 15,
    borderTopColor: "#aaa",
    borderTopWidth: 1,
    paddingTop: 10,
  },

  scrollView: {},
  imageContainer: {},
  image: {
    width: "100%",
    height: 250,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
    marginTop: -36,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    // elevation : 5,
    height: 110,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  star: {
    flexDirection: "row",
  },
  description: {
    color: "#555",
    textAlign: "center",
  },
  ratingContainer: {
    // height: 80,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  rating: {},
  ratingLeft: {
    backgroundColor: "#FF383B",
    height: 50,
    width: 50,
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingRight: {
    height: 50,
    justifyContent: "space-around",
    alignContent: "center",
    marginLeft: 20,
  },
  ratingText: {
    color: "#fff",
    fontSize: 15,
  },
  ratingRes: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF383B",
  },
  reviews: {
    fontSize: 16,
    fontWeight: "600",
  },
  descriptionContainer: {},
  services: {},
  service: {
    // flex: 0.25,
    marginRight: 100,
  },
  featureContainer: {},
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 18,
    fontWeight: "500",
  },
  timeContainer: {
    flexDirection: "row",
  },
  time: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  timeLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timeVal: {
    fontSize: 15,
    color: "#666",
  },
  roomContainer: {},
  rooms: {},
});