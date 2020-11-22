import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import ListHotel from "../../components/ListHotel";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../Detail";

import { getPrice } from "../../api/price";
import { getHotelsByLocation, getHotelsByName } from "../../api/hotel-details";

const Stack = createStackNavigator();

const images = [
  "https://i.imgur.com/M9Q7bzz.jpg",
  "https://i.imgur.com/lQY3Ma9.jpg",
  "https://i.imgur.com/8L4AiK9.jpgc",
  "https://i.imgur.com/xFNYwtT.jpg",
  "https://i.imgur.com/1MdWiBF.jpg",
  "https://i.imgur.com/IZSMJvT.jpg",
  "https://i.imgur.com/S5VOZNm.jpg",
  "https://i.imgur.com/bz66PYo.jpg",
  "https://i.imgur.com/M9Q7bzz.jpg",
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, list: [] };
  }

  componentDidMount() {
    const { location } = this.props.route.params;
    const page = 5;
    return fetch(
      `http://192.168.9.102:8090/search_query?page=${page}&key=${location}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            list: responseJson,
          },
          function () {}
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ListHotel list={this.state.list} navigation={this.props.navigation} />
      </View>
    );
  }
}

export default function List({ route, location }) {
  // const { location } = route.params;
  // console.log(location);
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialParams={route.params}
        name="Main"
        component={Main}
        options={{ headerTitle: "Danh sách", headerBackTitle: "Trờ lại" }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerTransparent: true, headerTitle: "" }}
      />
    </Stack.Navigator>
  );
}
