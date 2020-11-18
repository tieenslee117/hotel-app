import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Picker } from "@react-native-community/picker";
// import { Button } from "react-native-elements";

import { getHotelsByLocation, getHotelsByName } from "../../api/hotel-details";
import { getPrice } from "../../api/price.js";
export default function SearchArea() {
  const [option, setOption] = useState("location");
  const [input, setInput] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Nhập thông tin tìm kiếm"
          style={styles.searchInput}
          onChangeText={(text) => setInput(text)}
        />
        <Picker
          selectedValue={option}
          style={styles.searchPicker}
          onValueChange={(itemValue, itemIndex) => setOption(String(itemValue))}
        >
          <Picker.Item label="Địa điểm" value="location" />
          <Picker.Item label="Tên khách sạn" value="hotelName" />
        </Picker>
      </View>
      <Button
        color="#FF383B"
        title="Search"
        onPress={() => {
          if (option === "location") {
            getHotelsByLocation(input);
          } else if (option === "hotelName") {
            getHotelsByName(input);
          }
        }}
      />
      <Button
        color="#FF383B"
        title="test"
        onPress={() => {
          getPrice("3_4656943_20200830");
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
    // marginTop: -80,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    // elevation : 5,
    height: 200,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#eee",
  },
  searchInput: {
    backgroundColor: "#eee",
    height: 50,
    padding: 0,
    paddingLeft: 15,
    borderRadius: 6,
  },
  searchPicker: {
    height: 40,
    width: 100,
    backgroundColor: "#eee",
    borderWidth: 0,
    // borderLeftWidth : 1
    paddingLeft: 15,
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
});
