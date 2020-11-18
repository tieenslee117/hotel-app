import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchArea from "../../components/Home/SearchArea";
import SlideDestinations from "../../components/Home/SlideDestinations";

const HomeStack = createStackNavigator();

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.background}>
          <Image
            resizeMode="cover"
            style={styles.imageBackground}
            source={{ uri: "https://i.imgur.com/8L4AiK9.jpg" }}
          />
        </View>
        <View style={styles.search}>
          <SearchArea />
        </View>

        <View style={styles.slideArea}>
          <SlideDestinations />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    // backgroundColor: "pink",
    // marginHorizontal: 20,
  },
  background: {},
  imageBackground: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: "100%",
    height: 200,
  },
  slideArea: {
    marginTop: 20,
  },
  text: {
    fontSize: 50,
  },
  search: {
    marginTop: -100,
  },
});
