import React from "react";
import { View, Text } from "react-native";
import ListHotel from "../../components/ListHotel";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../Detail";

const Stack = createStackNavigator();

function Main({ navigation }) {
  const list = [
    {
      name: "Khach san thu 1",
      image: "https://i.imgur.com/8L4AiK9.jpgc",
      star: 4,
      rating: 8.5,
      pos: "Ba dinh, Hanoi",
      price: 800000,
      numOfReviews: 1234,
    },
    {
      name: "Khach san thu 2",
      image: "https://i.imgur.com/bz66PYo.jpg",
      star: 3.5,
      rating: 8.5,
      pos: "Ba dinh, Hanoi",
      price: 900000,
      numOfReviews: 1234,
    },
    {
      name: "Khach san thu 3",
      image: "https://i.imgur.com/S5VOZNm.jpg",
      star: 4.5,
      rating: 8.5,
      pos: "Ba dinh, Hanoi",
      price: 1000000,
      numOfReviews: 1234,
    },
    {
      name: "Khach san thu 4",
      image: "https://i.imgur.com/IZSMJvT.jpg",
      star: 4,
      rating: 8.5,
      pos: "Ba dinh, Hanoi",
      price: 1200000,
      numOfReviews: 1234,
    },
    {
      name: "Khach san thu 5",
      image: "https://i.imgur.com/1MdWiBF.jpg",
      star: 2.5,
      rating: 8.5,
      pos: "Ba dinh, Hanoi",
      price: 1250000,
      numOfReviews: 1234,
    },
    {
      name: "Khach san thu 6",
      image: "https://i.imgur.com/M9Q7bzz.jpg",
      star: 5,
      rating: 8.5,
      pos: "Ba dinh, Hanoi",
      price: 690000,
      numOfReviews: 1234,
    },
    {
      name: "Khach san thu 7",
      image: "https://i.imgur.com/xFNYwtT.jpg",
      star: 4,
      rating: 8.5,
      pos: "Ba dinh, Hanoi",
      price: 1300000,
      numOfReviews: 1234,
    },
    {
      name: "Khach san thu 8",
      image: "https://i.imgur.com/lQY3Ma9.jpg",
      star: 3.5,
      rating: 8.5,
      pos: "Ba dinh, Hanoi",
      price: 1000000000,
      numOfReviews: 1234,
    },
  ];
  return (
    <View>
      <ListHotel list={list} navigation={navigation} />
    </View>
  );
}
export default function Favorite() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Favorite"
        component={Main}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
