import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
  ActionSheetIOS,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DefaultFont } from "../configs/theme";
import { BaseColor } from "../configs/theme";
import showStar from "../helpers/show-star";
import formatPrice from "../helpers/format-price";
import rateFromNum from "../helpers/rate-from-num";
import { Drawer } from "react-native-paper";
import ActionSheet from "react-native-actionsheet";
import { Button } from "react-native-paper";

import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import { AppLoading } from "expo";
import { FontWeight, Typography, FontSize } from "../configs/typography";

export default function ListHotel({ list, navigation }) {
  const [key, setKey] = useState(0);
  const providers = {
    2: `traveloka`, //: 1000000153223
    3: "agoda", ///vi-vn/hai-au-hotel_3/hotel/haiphong-vn.html
    4: "expedia", //1594213
    5: "booking", //https://www.booking.com/hotel/vn/secret-garden.vi.html
  };
  const [result, setResult] = useState("🔮");
  let actionSheet = useRef();
  const optionArray = ["Phù hợp nhất", "Giá thấp nhất", "Cancel"];
  // const showActionSheet = () => {
  //   //To show the Bottom ActionSheet
  //   actionSheet.current.show();
  // };

  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
  });

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Generate number", "Reset"],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 2) {
          setResult("🔮");
        }
      }
    );

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
  const getToday = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
  };
  const handleNavigateDetail = (item) => {
    console.log(item.providers[0]["provider"]);
    navigation.navigate("Detail", { item: item });
  };

  const [active, setActive] = React.useState("");
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <TouchableOpacity
          style={styles.basicFilter}
          onPress={() => console.log("test")}
        >
          <View style={styles.filterIcon}>
            <FontAwesome5
              name="sort-amount-up"
              size={20}
              color={BaseColor.grayColor}
            />
          </View>
          <Text style={styles.option}>Phù hợp nhất</Text>
          <Text style={styles.option2}>Giá thấp nhất</Text>

          {/* <ActionSheet
            ref={actionSheet}
            // Title of the Bottom Sheet
            title={"Sắp xếp theo"}
            // Options Array to show in bottom sheet
            options={optionArray}
            // Define cancel button index in the option array
            // This will take the cancel option in bottom
            // and will highlight it
            cancelButtonIndex={4}
            // Highlight any specific option
            destructiveButtonIndex={1}
            onPress={(index) => {
              // Clicking on the option will give you alert
              alert(optionArray[index]);
            }}
          /> */}

          {/* <View style={styles.filterField}>
            <Drawer.Section>
              <Drawer.Item
                label="First Item"
                active={active === "first"}
                onPress={() => setActive("first")}
              />
              <Drawer.Item
                label="Second Item"
                active={active === "second"}
                onPress={() => setActive("second")}
              />
            </Drawer.Section>
          </View> */}
        </TouchableOpacity>
        <View style={styles.advancedFilter}>
          <View style={styles.filterIcon}>
            <FontAwesome5 name="filter" size={20} color={BaseColor.grayColor} />
          </View>
          <Text style={styles.filterText}>Lọc</Text>
        </View>
      </View>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={styles.hotel}
            onPress={() => {
              console.log(item);
              handleNavigateDetail(item);
            }}
          >
            <View>
              <View style={styles.image}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
              <View style={styles.info}>
                <View style={styles.infoLeft}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.address}>
                    <MaterialCommunityIcons
                      name="map-marker"
                      color={BaseColor.orangeColor}
                      size={18}
                    />
                    <Text style={styles.addressText}>{item.address}</Text>
                  </View>
                  <View style={styles.scoreArea}>
                    <View style={styles.scoreTag}>
                      <Text style={styles.scoreNum}>{item.score / 10}</Text>
                    </View>
                    <View style={styles.scoreRight}>
                      <Text style={styles.scoreText}>
                        {rateFromNum(item.score)}
                      </Text>
                      <View style={styles.star}>{showStar(item.star)}</View>
                    </View>
                  </View>

                  {/* <Text style={styles.reviews}>
                    {item.numOfReviews} Reviewed
                  </Text> */}
                </View>

                <View style={styles.infoRight}>
                  <View style={styles.logoContainer}>
                    <Image
                      // source={require(providers[item.providers[0]["provider"]])}
                      source={require(`../assets/logo/agoda.png`)}
                      style={styles.logo}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.price}>{item.price}đ</Text>
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
    fontFamily: "Raleway_400Regular",
    backgroundColor: "#fff",
  },
  filter: {
    // marginBottom: 18,
    // marginTop: 18,
    margin: 12,
    flexDirection: "row",
    justifyContent: "space-between",

    // borderBottomWidth: 0.5,
    // borderBottomColor: BaseColor.grayColor,
  },
  filterText: {
    color: BaseColor.grayColor,
    textAlign: "center",
    fontWeight: "300",
    fontSize: 18,
  },
  basicFilter: {
    flexDirection: "row",
    flex: 0.5,
    color: BaseColor.grayColor,
    alignItems: "center",
  },
  option: {
    marginLeft: 10,
    color: BaseColor.grayColor,
    fontWeight: "300",
    fontSize: 18,
  },
  option2: {
    marginLeft: 10,
    color: BaseColor.grayColor,
    fontWeight: "300",
    fontSize: 18,
    borderLeftWidth: 0.5,
    borderLeftColor: BaseColor.grayColor,
  },
  filterIcon: {},
  advancedFilter: {
    color: BaseColor.grayColor,
    flex: 0.22,
    flexDirection: "row",
    borderLeftWidth: 0.5,
    borderLeftColor: BaseColor.grayColor,
    // backgroundColor: "green",
    justifyContent: "space-around",
    alignItems: "center",
  },
  hotel: {
    // flex: 1,
    // borderWidth: 1,
    // borderColor: "#555",
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
    flex: 0.65,
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
    fontSize: 18,
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
    // justifyContent: "center",
    alignItems: "center",
  },
  scoreNum: {
    color: "#fff",
    fontWeight: "900",
  },
  scoreText: {
    color: BaseColor.grayColor,
    fontWeight: "500",
  },

  star: {
    flexDirection: "row",
  },
  reviews: {},
  infoRight: {
    flex: 0.3,
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
});
