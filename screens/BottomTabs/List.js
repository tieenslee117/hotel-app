import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import ListHotel from "../../components/ListHotel";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../Detail";
import { BaseColor, DefaultFont } from "../../configs/theme";
import Ionicons from "react-native-vector-icons/Ionicons";

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
    this.state = {
      isLoading: false,
      list: [],
      fakeData: [
        {
          schema: [
            { name: "id", dataType: {}, nullable: true, metadata: { map: {} } },
            {
              name: "address",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "name",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "overall_score",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "price",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "provider",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "province",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "rank",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "star_number",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "suggest",
              dataType: {
                elementType: {
                  keyType: {},
                  valueType: {},
                  valueContainsNull: true,
                },
                containsNull: true,
              },
              nullable: true,
              metadata: { map: {} },
            },
          ],
          values: [
            "42644",
            "Số 72 Lê Lợi, Thành Phố Vinh, Nghệ An",
            "tecco sky hotel & spa",
            81.0,
            "447,000",
            2,
            "nghe an",
            1.2768983912733152,
            3,
            [
              { price: "447,000", provider: "2", url: "3000010029313" },
              { price: "447,000", provider: "2", url: "3000010029313" },
              { price: "447,000", provider: "2", url: "3000010029313" },
              { price: "447,000", provider: "2", url: "3000010029313" },
              { price: "447,000", provider: "2", url: "3000010029313" },
              { price: "447,000", provider: "2", url: "3000010029313" },
              { price: "447,000", provider: "2", url: "3000010029313" },
            ],
          ],
        },
        {
          schema: [
            { name: "id", dataType: {}, nullable: true, metadata: { map: {} } },
            {
              name: "address",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "name",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "overall_score",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "price",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "provider",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "province",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "rank",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "star_number",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "suggest",
              dataType: {
                elementType: {
                  keyType: {},
                  valueType: {},
                  valueContainsNull: true,
                },
                containsNull: true,
              },
              nullable: true,
              metadata: { map: {} },
            },
          ],
          values: [
            "21903",
            " Quốc Lộ 1A, Huyện Quỳnh Lưu, Nghệ An",
            "muong thanh grand hoang mai",
            82.0,
            "863,847",
            2,
            "nghe an",
            1.2666658038809342,
            4,
            [
              { price: "866,546", provider: "2", url: "3000010025457" },
              { price: "868,827", provider: "2", url: "3000010025457" },
              { price: "869,592", provider: "2", url: "3000010025457" },
              { price: "866,546", provider: "2", url: "3000010025457" },
              { price: "863,847", provider: "2", url: "3000010025457" },
              { price: "866,546", provider: "2", url: "3000010025457" },
              { price: "870,000", provider: "2", url: "3000010025457" },
            ],
          ],
        },
        {
          schema: [
            { name: "id", dataType: {}, nullable: true, metadata: { map: {} } },
            {
              name: "address",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "name",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "overall_score",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "price",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "provider",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "province",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "rank",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "star_number",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "suggest",
              dataType: {
                elementType: {
                  keyType: {},
                  valueType: {},
                  valueContainsNull: true,
                },
                containsNull: true,
              },
              nullable: true,
              metadata: { map: {} },
            },
          ],
          values: [
            "22157",
            "Số 3 Mai Hắc Đế, Thành Phố Vinh, Nghệ An",
            "vinh plaza hotel",
            79.0,
            "490,000",
            2,
            "nghe an",
            1.2625208490736073,
            4,
            [
              { price: "490,000", provider: "2", url: "3000010029485" },
              { price: "490,000", provider: "2", url: "3000010029485" },
              { price: "490,000", provider: "2", url: "3000010029485" },
              { price: "490,000", provider: "2", url: "3000010029485" },
              { price: "490,000", provider: "2", url: "3000010029485" },
              { price: "490,000", provider: "2", url: "3000010029485" },
              { price: "490,000", provider: "2", url: "3000010029485" },
            ],
          ],
        },
        {
          schema: [
            { name: "id", dataType: {}, nullable: true, metadata: { map: {} } },
            {
              name: "address",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "name",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "overall_score",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "price",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "provider",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "province",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "rank",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "star_number",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "suggest",
              dataType: {
                elementType: {
                  keyType: {},
                  valueType: {},
                  valueContainsNull: true,
                },
                containsNull: true,
              },
              nullable: true,
              metadata: { map: {} },
            },
          ],
          values: [
            "23146",
            "43 Quang Trung, Thành Phố Vinh, Nghệ An",
            "lam giang hotel",
            80.0,
            "628,525",
            2,
            "nghe an",
            1.2591278002202322,
            3,
            [
              { price: "629,858", provider: "2", url: "3000010026115" },
              { price: "632,148", provider: "2", url: "3000010026115" },
              { price: "632,073", provider: "2", url: "3000010026115" },
              { price: "629,858", provider: "2", url: "3000010026115" },
              { price: "628,525", provider: "2", url: "3000010026115" },
              { price: "629,858", provider: "2", url: "3000010026115" },
              { price: "633,000", provider: "2", url: "3000010026115" },
            ],
          ],
        },
        {
          schema: [
            { name: "id", dataType: {}, nullable: true, metadata: { map: {} } },
            {
              name: "address",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "name",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "overall_score",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "price",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "provider",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "province",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "rank",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "star_number",
              dataType: {},
              nullable: true,
              metadata: { map: {} },
            },
            {
              name: "suggest",
              dataType: {
                elementType: {
                  keyType: {},
                  valueType: {},
                  valueContainsNull: true,
                },
                containsNull: true,
              },
              nullable: true,
              metadata: { map: {} },
            },
          ],
          values: [
            "849",
            "số 7 Nguyễn Trãi, Thành Phố Vinh, Nghệ An",
            "media hotel",
            65.0,
            "440,000",
            2,
            "nghe an",
            1.2289763413349768,
            3,
            [
              { price: "440,000", provider: "2", url: "3000010028780" },
              { price: "440,000", provider: "2", url: "3000010028780" },
              { price: "440,000", provider: "2", url: "3000010028780" },
              { price: "440,000", provider: "2", url: "3000010028780" },
              { price: "440,000", provider: "2", url: "3000010028780" },
              { price: "440,000", provider: "2", url: "3000010028780" },
              { price: "440,000", provider: "2", url: "3000010028780" },
            ],
          ],
        },
      ].map((hotel) => {
        const { values } = hotel;
        const providers = new Set(values[9]);
        return {
          id: values[0],
          address: values[1],
          name: values[2],
          score: values[3],
          price: String(values[4])
            .slice(0, values[4].length - 3)
            .concat("000"),
          domainId: values[5],
          star: values[8],
          providers: values[9],
          image: images[Math.floor(Math.random() * images.length) - 1],
          numOfReviews: "999",
        };
      }),
    };
  }

  // componentDidMount() {
  //   const { location } = this.props.route.params;
  //   const page = 5;
  //   const data = fetch(
  //     `http://192.168.9.102:8090/search_query?page=${page}&key=${location}`
  //   )
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState(
  //         {
  //           isLoading: false,
  //           list: responseJson,
  //         },
  //         function () {}
  //       );
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  /*
   *
   * 2. traveloka: 1000000153223
   * 3. agoda: /vi-vn/hai-au-hotel_3/hotel/haiphong-vn.html
   * 4. expedia: 1594213
   * 5. booking: https://www.booking.com/hotel/vn/secret-garden.vi.html
   *
   */
  //   const modifiedData = data.map((hotel) => {
  //     const { values } = hotel;
  //     const providers = new Set(values[9]);
  //     return {
  //       id: values[0],
  //       address: values[1],
  //       name: values[2],
  //       score: values[3],
  //       price: String(values[4])
  //         .slice(0, values[4].length - 3)
  //         .concat("000"),
  //       domainId: values[5],
  //       star: values[8],
  //       providers: providers,
  //       image: images[Math.floor(Math.random() * images.length) - 1],
  //       numOfReviews: "999",
  //     };
  //   });
  //   return modifiedData;

  // }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#ff333b" />
        </View>
      );
    }
    return (
      <View>
        <ListHotel
          list={this.state.fakeData}
          navigation={this.props.navigation}
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
          headerTitle: "Danh sách",
          headerBackTitle: "Trờ lại",

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
