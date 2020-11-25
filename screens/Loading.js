import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = async () => {
    // setTimeout(async () => {
    const token = await AsyncStorage.getItem("@token");
    console.log(token);
    if (token) {
      this.props.navigation.navigate("User");
    } else {
      this.props.navigation.navigate("Login");
    }
    // });
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ff333b" />
      </View>
    );
  }
}
