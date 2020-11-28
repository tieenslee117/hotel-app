import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { BaseColor, DefaultFont } from "../../configs/theme";
// import { gethotels } from "../../api/get-hotels";
import Destination from "./Destination";
const hotels = [
  {
    uri: "https://i.imgur.com/S5VOZNm.jpg",
    title: "Đà Lạt",
    property: 1234,
  },
  {
    uri: "https://i.imgur.com/IZSMJvT.jpg",
    title: "Đà Nẵng",
    property: 4234,
  },
  {
    uri: "https://i.imgur.com/1MdWiBF.jpg",
    title: "Hà Nội",
    property: 5433,
  },
  {
    uri: "https://i.imgur.com/M9Q7bzz.jpg",
    title: "Hải Phòng",
    property: 1214,
  },
  {
    uri: "https://i.imgur.com/xFNYwtT.jpg",
    title: "Vũng Tàu",
    property: 2334,
  },
  {
    uri: "https://i.imgur.com/lQY3Ma9.jpg",
    title: "Lào Cai",
    property: 3334,
  },
];
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

export class SlideHotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      hotels: [],
    };
  }

  componentDidMount() {
    // gethotels(this)
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
      <View style={styles.container}>
        <Text style={styles.title}>Khách sạn đã xem</Text>
        <ScrollView
          horizontal={true}
          style={styles.slide}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {hotels.map((des, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  this.props.navigation.navigate("List", {
                    location: des.title,
                  });
                }}
              >
                <View style={styles.card}>
                  <Image
                    source={{
                      uri: images[Math.floor(Math.random() * images.length)],
                    }}
                    style={styles.image}
                  />
                  <View style={styles.info}>
                    <Text style={styles.text}>{des.title}</Text>
                    <View style={styles.exploreBtn}>
                      <Text style={styles.exploreText}>Xem ngay</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

// export default function Slidehotels() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Địa điểm nổi bật</Text>
//       <ScrollView horizontal={true} style={styles.slide} showsVerticalScrollIndicator ={false}
// showsHorizontalScrollIndicator={false}>
//         {hotels.map((des, i) => {
//           return (
//             <TouchableHighlight key={i}>
//               <View style={styles.card}>
//                 <Image
//                   source={{
//                     uri: images[Math.floor(Math.random() * images.length)],
//                   }}
//                   style={styles.image}
//                 />
//                 <View style={styles.info}>
//                   <Text style={styles.text}>{des.title}</Text>
//                   <View style={styles.exploreBtn}>
//                     <Text style={styles.exploreText}>Xem ngay</Text>
//                   </View>
//                 </View>
//               </View>
//             </TouchableHighlight>
//           );
//         })}
//       </ScrollView>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    fontFamily: DefaultFont,
    backgroundColor: "#fff",
    height: 250,
  },
  card: {
    marginRight: 10,
    marginLeft: 10,
    // padding: 10,
    borderRadius: 8,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3.5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 20,
    marginLeft: 20,
  },
  slide: {
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    margin: 4,
    color: "#fff",
    fontWeight: "500",
  },
  property: {
    fontSize: 16,
    color: "#aaa",
    margin: 4,
  },
  info: {
    // flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    padding: 6,
    marginTop: -80,
  },
  image: {
    width: 200,
    height: 10,
    borderRadius: 8,
  },
  exploreBtn: {
    backgroundColor: BaseColor.orangeColor,
    height: 28,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  exploreText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
