import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Auth from "../AuthScreens/Auth";

export default function More({ navigation }) {
  const isLogined = false;

  return isLogined ? (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {/* <Text style={styles.title}> Profile </Text> */}
        <MaterialCommunityIcons
          style={styles.icon}
          name="message-outline"
          color="##FF383B"
          size={35}
        />
        <Ionicons
          style={styles.icon}
          name="ios-notifications"
          color="##FF383B"
          size={35}
        />
      </View>
      <ScrollView>
        <View style={styles.userInfo}>
          <View style={styles.info}>
            <View>
              <FontAwesome5 name="user-circle" size={40} color="##FF383B" />
            </View>
            <View style={styles.textInfo}>
              <Text style={styles.name}>Tien Le</Text>
              <Text style={styles.pos}>Hoan Kiem, Ha Noi, Viet Nam</Text>
            </View>
          </View>
          <View style={styles.logout}>
            {/* <Text>Logout</Text> */}
            <MaterialCommunityIcons name="logout" size={40} color="#FF383B" />
          </View>
        </View>
        <View style={styles.fields}>
          <Text style={styles.text}>Edit Profile</Text>
          <MaterialIcons name="navigate-next" size={30} color="#FF383B" />
        </View>
        <View style={styles.fields}>
          <Text style={styles.text}>Change Password</Text>
          <MaterialIcons name="navigate-next" size={30} color="#FF383B" />
        </View>
        <View style={styles.fields}>
          <Text style={styles.text}>Language</Text>
          <View style={styles.right}>
            <Text style={styles.text}>English</Text>
            <MaterialIcons name="navigate-next" size={30} color="#FF383B" />
          </View>
        </View>
        <View style={styles.fields}>
          <Text style={styles.text}>Currency</Text>
          <View style={styles.right}>
            <Text style={styles.text}>VND</Text>
            <MaterialIcons name="navigate-next" size={30} color="#FF383B" />
          </View>
        </View>
      </ScrollView>
    </View>
  ) : (
    <View>
      <Auth navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navBar: {
    backgroundColor: "#fff",
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 20,
    paddingRight: 25,
  },
  title: {
    fontSize: 20,
    color: "#000",
  },
  userInfo: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ddd",
    padding: 20,
    borderRadius: 10,
  },
  info: {
    flexDirection: "row",
  },
  textInfo: {
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
  },
  pos: {},
  logout: {
    flexDirection: "row",
  },
  fields: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "#222",
    borderBottomWidth: 2,
    margin: 20,
    marginTop: 0,
  },
  text: {
    fontSize: 17,
    color: "#222",
  },
  icon: {
    marginLeft: 20,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
});
