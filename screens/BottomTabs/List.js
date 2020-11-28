import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import ListHotel from "../../components/ListHotel";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../Detail";
import { BaseColor, DefaultFont } from "../../configs/theme";
import Ionicons from "react-native-vector-icons/Ionicons";

import { getPrice } from "../../api/price";
import { getHotelsByLocation, getHotelsByName } from "../../api/hotel-details";
import { normalizeName } from "../../helpers/normalize-helpers";
import getToday from "../../helpers/get-today";
import { TOKEN } from "../../configs/key";
const Stack = createStackNavigator();
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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      list: [],
    };
  }

  componentDidMount() {
    const today = getToday();
    const { location, option } = this.props.route.params;
    const page = 10;
    let url = `http://13.212.124.210:3800/search_query?page=${page}&key=${location}`;
    if (option == 2) {
      url = `http://13.212.124.210:3800/lowest_price?page=${page}&key=${location}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const tmp = responseJson;
        const { id } = tmp;

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Basic ${TOKEN}`);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          hotel_ids: `2_${id}_20201128, 3_${id}_20201128, 4_${id}_20201128, 5_${id}_20201128`,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch("https://tripgle.data.tripi.vn/get_price", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
        this.setState(
          {
            isLoading: false,
            list: tmp,
          },
          function () {}
        );
      })
      .catch((error) => {
        console.error(error);
      });

    /*
     *
     * 2. traveloka: 1000000153223
     * 3. agoda: /vi-vn/hai-au-hotel_3/hotel/haiphong-vn.html
     * 4. expedia: 1594213
     * 5. booking: https://www.booking.com/hotel/vn/secret-garden.vi.html
     *
     */
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
        <ListHotel
          list={this.state.list}
          navigation={this.props.navigation}
          location={this.props.route.params.location}
          opt={this.props.route.params.option}
        />
      </View>
    );
  }
}

export default function List({ route, location }) {
  // const { location } = route.params;
  // console.log(location);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: "transparent",
        },
        headerTintColor: BaseColor.whiteColor,
        headerTitleStyle: {
          fontWeight: "200",
          fontSize: 22,
          // color: "#000",
        },
      }}
    >
      <Stack.Screen
        initialParams={route.params}
        name="Main"
        component={Main}
        options={{
          headerBackTitle: "Trờ lại",
          headerTitle: "Danh sách",
          headerTintColor: BaseColor.orangeColor,
          headerTitleStyle: {
            fontWeight: "200",
            fontSize: 22,
            // color: "#000",
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTransparent: true,
          headerTitle: " ",
          headerBackTitle: " ",

          headerTintColor: BaseColor.orangeColor,
          headerTitleStyle: {
            fontWeight: "200",
            fontSize: 22,
            // color: "#000",
          },
        }}
      />
    </Stack.Navigator>
  );
}
