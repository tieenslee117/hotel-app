import React, { useState } from "react";
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

import showStar from "../helpers/show-star";
import formatPrice from "../helpers/format-price";
import rateFromNum from "../helpers/rate-from-num";
export default function ListHotel({ list, navigation }) {
  const [key, setKey] = useState(0);
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
  const getToday = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
  };
  const handleNavigateDetail = (item) => {
    navigation.navigate("Detail", { item: item });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => {
              console.log(item);
              handleNavigateDetail(item);
            }}
          >
            <View style={styles.card}>
              <View>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
              <View style={styles.info}>
                <View style={styles.infoWithoutPrice}>
                  <Text style={styles.name}>{item.name}</Text>

                  <View style={styles.star}>{showStar(item.star)}</View>
                  <View style={styles.address}>
                    <MaterialCommunityIcons
                      name="map-marker"
                      color="#4477AA"
                      size={20}
                    />
                    <Text style={styles.addressText}>{item.address}</Text>
                  </View>
                  <View style={styles.scoreArea}>
                    <View style={styles.scoreDiv}>
                      <Text style={styles.scoreNum}>{item.score / 10}</Text>
                    </View>
                    <Text style={styles.scoreText}>
                      {rateFromNum(item.score)}
                    </Text>
                  </View>
                  <Text style={styles.reviews}>
                    {item.numOfReviews} Reviewed
                  </Text>
                </View>
                <View>
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
    height: 220,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#cc3377",
  },
  image: {
    width: 120,
    height: 200,
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
  infoWithoutPrice: {
    // backgroundColor: "blue",
    flex: 0.9,
    justifyContent: "space-between",
    marginRight: 5,
    alignSelf: "flex-start",
  },
  address: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  addressText: {
    fontWeight: "600",
    color: "#4477AA",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    color: "#ff383b",
  },
  scoreArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreDiv: {
    backgroundColor: "#66aa33",
    // width: "100%",
    borderRadius: 5,
    padding: 5,
  },
  scoreNum: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  scoreText: {
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
});
