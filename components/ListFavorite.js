import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DefaultFont, BaseColor } from "../configs/theme";
// import showStar from "../helpers/show-star";
import {
  rateFromNum,
  normalizeName,
  formatPrice,
} from "../helpers/normalize-helpers";

import { Drawer } from "react-native-paper";
import ActionSheet from "react-native-actionsheet";
import { Button } from "react-native-paper";

import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import { AppLoading } from "expo";
import { FontWeight, Typography, FontSize } from "../configs/typography";

export default function ListFavorite({ list, navigation }) {
  const [key, setKey] = useState(0);
  const [listHotel, setListHotel] = useState([]);
  const [option, setOption] = useState(1);
  useEffect(() => {}, []);
  const providers = {
    2: `traveloka`, //: 1000000153223
    3: "agoda", ///vi-vn/hai-au-hotel_3/hotel/haiphong-vn.html
    4: "expedia", //1594213
    5: "booking", //https://www.booking.com/hotel/vn/secret-garden.vi.html
  };
  const logos = [
    "https://imgur.com/sRJmYdu.jpg",
    "https://imgur.com/Dsb2cYG.jpg",
    "https://imgur.com/yZdnZ6W.jpg",
    "https://imgur.com/kSieQw2.jpg",
  ];

  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
  });

  const showStar = (n) => {
    let stars = [];
    let i = 0;
    for (; i < Math.floor(n); i++) {
      stars.push(
        <MaterialCommunityIcons
          key={i}
          name="star"
          color={BaseColor.yellowColor}
          size={16}
        />
      );
    }
    if (Math.round(n) != n) {
      stars.push(
        <MaterialCommunityIcons
          key={i}
          name="star-half"
          color={BaseColor.yellowColor}
          size={16}
        />
      );
    }
    // return <View>{/* {for(let i = 0)} */}</View>;
    return stars;
  };
  const handleNavigateDetail = (item) => {
    console.log(normalizeName(item.name));
    navigation.navigate("Detail", { item: item });
  };
  const [active, setActive] = React.useState("");
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.hotel}
            onPress={() => {
              console.log(item);
              handleNavigateDetail(item);
            }}
          >
            <View>
              <View style={styles.image}>
                <Image source={{ uri: item.logo }} style={styles.image} />
                {/* <Image source={require(item.image)} style={styles.image} /> */}
              </View>
              <View style={styles.info}>
                <View style={styles.infoLeft}>
                  <Text style={styles.name}>{normalizeName(item.name)}</Text>

                  <View style={styles.address}>
                    <MaterialCommunityIcons
                      name="map-marker"
                      color={BaseColor.orangeColor}
                      size={18}
                    />
                    <Text style={styles.addressText}>{item.address}</Text>
                  </View>
                  <View style={styles.star}>{showStar(item.star_number)}</View>
                  <View style={styles.scoreArea}>
                    <View style={styles.scoreTag}>
                      <Text style={styles.scoreNum}>
                        {item.overall_score / 10}
                      </Text>
                    </View>
                    <View style={styles.scoreRight}>
                      <Text style={styles.scoreText}>
                        {rateFromNum(item.overall_score)}
                      </Text>
                      <Text style={styles.reviews}>
                        {item.review_count} nhận xét
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.infoRight}>
                  <View style={styles.logoContainer}>
                    <Image
                      source={{
                        uri:
                          logos[
                            Number.parseInt(item.suggest[0]["provider"]) - 2
                          ],
                      }}
                      style={styles.logo}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.price}>
                    {formatPrice(item.suggest[0]["price"])}đ
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Raleway_400Regular",
    backgroundColor: "#fff",
    // flex: 1,
    // marginBottom: 100,
  },
  hotel: {
    shadowColor: BaseColor.dividerColor,
    shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 1,
    shadowRadius: 3.8,
    elevation: 5,
    backgroundColor: "#fff",
    // padding: 10,
    // marginBottom: 100,
    // height: 220,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: BaseColor.dividerColor,
    borderBottomWidth: 0.3,
  },
  name: {
    fontSize: FontSize.title2,
    fontWeight: "500",
    // color: Ba
  },
  image: {
    width: "100%",
    height: 200,
    margin: 0,
  },
  info: {
    margin: 7,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoLeft: {
    flex: 0.6,
    // backgroundColor: "blue",
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    // backgroundColor: "red",
    marginLeft: -3,
  },
  addressText: {
    color: BaseColor.grayColor,
    marginLeft: 3,
  },
  price: {
    color: BaseColor.orangeColor,
    fontSize: 20,
    fontWeight: "700",
  },
  scoreArea: {
    marginTop: 15,
    flexDirection: "row",
  },
  scoreTag: {
    borderRadius: 5,
    borderTopRightRadius: 0,
    backgroundColor: BaseColor.orangeColor,
    width: 45,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  scoreRight: {
    justifyContent: "center",
    // alignItems: "center",
  },
  scoreNum: {
    color: "#fff",
    fontWeight: "900",
  },
  scoreText: {
    color: BaseColor.kashmir,
    fontWeight: "500",
  },

  star: {
    flexDirection: "row",
    marginTop: 3,
  },
  reviews: {
    color: BaseColor.grayColor,
  },
  infoRight: {
    flex: 0.35,
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
});
