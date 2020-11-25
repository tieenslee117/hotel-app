import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import showStar from "../helpers/show-star";
import rateFromNum from "../helpers/rate-from-num";
import formatPrice from "../helpers/format-price";
import { BaseColor } from "../configs/theme";
import ListRoom from "../components/ListRoom";

import * as Progress from "react-native-progress";

function ScoreBar({ nameScore, score }) {
  return (
    <View style={styles.scoreBar}>
      <Text style={styles.barLabel}>{nameScore}</Text>
      <View style={styles.barContainer}>
        <Progress.Bar
          progress={score / 10}
          // width={200}
          borderRadius={10}
          unfilledColor="#dedede"
          height={17}
          color={BaseColor.gbColor}
          borderWidth={0}
        />
        <Text style={styles.scoreBarText}>{score}</Text>
      </View>
    </View>
  );
}

export default function Detail({ route, navigation }) {
  const [listRoom, setListRoom] = useState([]);
  const list = [
    {
      name: "Phong thu 1",
      image: "https://i.imgur.com/8L4AiK9.jpgc",
      price: 800000,
    },
    {
      name: "Phong thu 2",
      image: "https://i.imgur.com/bz66PYo.jpg",
      price: 900000,
    },
    {
      name: "Phong thu 3",
      image: "https://i.imgur.com/S5VOZNm.jpg",
      price: 1000000,
    },
    {
      name: "Phong thu 4",
      image: "https://i.imgur.com/IZSMJvT.jpg",
      price: 1200000,
    },
    {
      name: "Phong thu 5",
      image: "https://i.imgur.com/1MdWiBF.jpg",
      price: 1250000,
    },
    {
      name: "Phong thu 6",
      image: "https://i.imgur.com/M9Q7bzz.jpg",
      price: 690000,
    },
    {
      name: "Phong thu 7",
      image: "https://i.imgur.com/xFNYwtT.jpg",
      price: 1300000,
    },
    {
      name: "Phong thu 8",
      image: "https://i.imgur.com/lQY3Ma9.jpg",
      price: 1000000000,
    },
  ];
  const showStar = (n) => {
    let stars = [];
    let i = 0;
    for (; i < Math.floor(n); i++) {
      stars.push(
        <MaterialCommunityIcons
          key={i}
          name="star"
          color={BaseColor.yellowColor}
          size={20}
        />
      );
    }
    if (Math.round(n) != n) {
      stars.push(
        <MaterialCommunityIcons
          key={i}
          name="star-half"
          color={BaseColor.yellowColor}
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
    score,
    address,
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
            source={{ uri: image }}
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
            <View style={styles.scoreContainer}>
              <View style={styles.scoreLeft}>
                <Text style={styles.scoreText}>{score / 10}</Text>
              </View>
              <View style={styles.scoreRight}>
                <Text style={styles.scoreRes}>{rateFromNum(score)}</Text>
                <Text style={styles.reviews}>See {numOfReviews} reviews</Text>
              </View>
            </View>
            <View style={styles.anotherScore}>
              <View style={styles.anotherScoreLeft}>
                <ScoreBar nameScore="Chất lượng phục vụ" score={7} />
                <ScoreBar nameScore="Vệ sinh" score={8} />
              </View>
              <View style={styles.anotherScoreRight}>
                <ScoreBar nameScore="Đồ ăn" score={7} />
                <ScoreBar nameScore="Thiết kế" score={9} />
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
                    color={BaseColor.gbColor}
                  />
                  {/* <MaterialCommunityIcons
                    size={25}
                    name="wifi-off"
                    color={BaseColor.orangeColor}
                  /> */}
                  <Text>wifi</Text>
                </View>

                <View style={styles.service}>
                  <MaterialCommunityIcons
                    size={25}
                    name="coffee"
                    color={BaseColor.gbColor}
                  />
                  {/* <MaterialCommunityIcons
                    size={25}
                    name="coffee-off"
                    color={BaseColor.orangeColor}
                  /> */}
                  <Text>coffee</Text>
                </View>
                <View style={styles.service}>
                  <MaterialCommunityIcons
                    size={25}
                    name="food"
                    color={BaseColor.gbColor}
                  />
                  <Text>breakfast</Text>
                </View>
                <View style={styles.service}>
                  <MaterialCommunityIcons
                    size={25}
                    name="swim"
                    color={BaseColor.gbColor}
                  />
                  <Text>pool</Text>
                </View>
                <View style={styles.service}>
                  {/* <MaterialCommunityIcons
                    size={25}
                    name="paw"
                    color={BaseColor.gbColor}
                  /> */}
                  <MaterialCommunityIcons
                    size={25}
                    name="paw-off"
                    color={BaseColor.gbColor}
                  />
                  <Text>paw</Text>
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>Vị trí</Text>
            <View style={styles.locationContainer}>
              <MaterialCommunityIcons
                name="map-marker"
                color={BaseColor.orangeColor}
                size={20}
              />
              <Text style={styles.locationText}>{address}</Text>
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
    height: 190,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
    marginTop: -50,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    // elevation : 5,
    height: 130,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "400",
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },
  star: {
    flexDirection: "row",
  },
  description: {
    color: "#555",
    textAlign: "center",
    marginTop: 5,
  },
  scoreContainer: {
    // height: 80,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  score: {},
  scoreLeft: {
    backgroundColor: BaseColor.orangeColor,
    height: 60,
    width: 60,
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  scoreRight: {
    height: 50,
    justifyContent: "space-between",
    alignContent: "center",
    marginLeft: 18,
  },
  scoreText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  scoreRes: {
    fontSize: 18,
    fontWeight: "600",
    color: BaseColor.orangeColor,
  },
  reviews: {
    fontSize: 16,
    fontWeight: "300",
    color: BaseColor.grayColor,
  },

  anotherScore: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },
  anotherScoreLeft: {
    // backgroundColor: "red",
    flex: 0.48,
  },

  anotherScoreRight: {
    flex: 0.48,
  },

  scoreBar: {
    marginBottom: 15,
  },
  barContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  barLabel: {
    fontSize: 14,
    color: BaseColor.grayColor,
    marginBottom: 5,
  },
  scoreBarText: {
    fontSize: 13,
    marginLeft: 5,
  },

  descriptionContainer: {},
  services: {
    marginTop: 5,
  },
  service: {
    // flex: 0.25,
    marginRight: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  featureContainer: {},
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#4477AA",
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
  roomContainer: {
    margin: 0,
  },
  rooms: {},
});
