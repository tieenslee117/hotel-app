import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Image,
  ActivityIndicator,
} from "react-native";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { DefaultFont } from "../configs/theme";
import { TOKEN } from "../configs/key";
import { BaseColor } from "../configs/theme";
function getToday() {
  const today = new Date();
  const date =
    today.getFullYear() + "" + (today.getMonth() + 1) + "" + today.getDate();

  return date;
}
export class ListRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      list: [],
    };
  }
  componentDidMount() {
    const URL = "https://tripgle.data.tripi.vn/get_price";
    const { domainId, hotelId } = this.props;
    const today = getToday();
    const data = `${domainId},${hotelId},${today}`;
    const raw = JSON.stringify({ hotel_ids: data });
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${TOKEN}`);
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    // myHeaders.append("Accept", "*/*");
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      credentials: "include",
      method: "POST",
      headers: myHeaders,
      // mode: "no-cors",
      body: raw,
      redirect: "follow",
    };

    fetch("https://tripgle.data.tripi.vn/get_price", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        this.setState({
          list: result,
          isLoading: false,
        });
      })
      .catch((error) => console.log("error", error));
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={BaseColor.orangeColor} />
        </View>
      );
    }
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={this.state.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item[0][0].room_type_name}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: DefaultFont,
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
