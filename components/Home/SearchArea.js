import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { Picker } from "@react-native-community/picker";
import { BaseColor } from "../../configs/theme";
import { DefaultFont } from "../../configs/theme";
import { AppLoading } from "expo";

import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";

import { getHotelsByLocation, getHotelsByName } from "../../api/hotel-details";
import { getPrice } from "../../api/price.js";
export default function SearchArea({ navigation }) {
  const [option, setOption] = useState("location");
  const [input, setInput] = useState("");
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
  });
  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Nhập địa điểm hoặc tên khách sạn"
          style={styles.searchInput}
          onChangeText={(text) => setInput(text)}
        />
        <View style={styles.searchPicker}>
          <Picker
            selectedValue={option}
            onValueChange={(itemValue, itemIndex) =>
              setOption(String(itemValue))
            }
          >
            <Picker.Item label="Địa điểm" value="location" />
            <Picker.Item label="Tên khách sạn" value="hotelName" />
          </Picker>
        </View>
      </View>
      <Button
        buttonStyle={styles.button}
        title="Tìm kiếm"
        onPress={() => {
          if (option === "location") {
            // getHotelsByLocation(input);
            navigation.navigate("List", { location: input, option: 1 });
          } else if (option === "hotelName") {
            // getHotelsByName(input);
            navigation.navigate("List", { name });
          }
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    fontFamily: DefaultFont,
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
    // marginTop: -80,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // elevation : 5,
    height: 170,
  },
  searchBar: {
    // flexDirection: "row",
    // backgroundColor: "#eee",
  },
  searchInput: {
    // flex: 0.65,
    backgroundColor: "#eee",
    height: 50,
    padding: 0,
    paddingLeft: 15,
    borderRadius: 6,
    marginBottom: 20,
  },
  searchPicker: {
    display: "none",
  },
  searchIcon: {
    padding: 10,
  },

  bookInfo: {
    flexDirection: "row",
    backgroundColor: "#eee",
    // flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 15,
    padding: 10,
  },
  button: {
    height: 45,
    marginTop: 5,
    marginBottom: 15,
    // margin: 30,
    color: "#fff",
    // backgroundColor: "transparent",
    backgroundColor: BaseColor.orangeColor,
  },
});
