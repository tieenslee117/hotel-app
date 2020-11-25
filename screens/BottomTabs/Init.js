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
import { BaseColor } from "../../configs/theme";

const HomeStack = createStackNavigator();

// import { BaseColor, Typography, FontWeight } from "@config";
import { DefaultFont } from "../../configs/theme";

export default function Init({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.background}>
          <Image
            resizeMode="cover"
            style={styles.imageBackground}
            source={{
              uri:
                "https://media.architecturaldigest.com/photos/5a0476b03043ef0ce17b915f/master/w_1600%2Cc_limit/Louisiana%2520-%2520Courtesy%2520of%2520Hotel.jpg",
            }}
          />
        </View>
        <View style={styles.search}>
          <SearchArea navigation={navigation} />
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
    fontFamily: DefaultFont,
    backgroundColor: BaseColor.whiteColor,
    // flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    // backgroundColor: "pink",
    // marginHorizontal: 20,
  },
  background: {},
  imageBackground: {
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    width: "100%",
    height: 180,
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
