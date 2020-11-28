import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { BaseColor, DefaultFont } from "../../configs/theme";
import { getDestinations } from "../../api/get-destinations";
import Destination from "./Destination";
import { normalizeName } from "../../helpers/normalize-helpers";

const destinations = [
  {
    schema: [
      { name: "province", dataType: {}, nullable: true, metadata: { map: {} } },
      {
        name: "avg(rank)",
        dataType: {},
        nullable: true,
        metadata: { map: {} },
      },
    ],
    values: ["thua thien hue", 1.1588516675508012],
  },
  {
    schema: [
      { name: "province", dataType: {}, nullable: true, metadata: { map: {} } },
      {
        name: "avg(rank)",
        dataType: {},
        nullable: true,
        metadata: { map: {} },
      },
    ],
    values: ["kien giang", 1.08087196095974],
  },
  {
    schema: [
      { name: "province", dataType: {}, nullable: true, metadata: { map: {} } },
      {
        name: "avg(rank)",
        dataType: {},
        nullable: true,
        metadata: { map: {} },
      },
    ],
    values: ["hai phong", 1.0662025619369826],
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

export class SlideDestinations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      destinations: [],
    };
  }

  componentDidMount() {
    const page = 10;
    fetch(`http://13.212.124.210:3800/top_province?page=${page}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            destinations: responseJson.map((e) => {
              const { province_name } = e;
              return normalizeName(province_name);
            }),
          },
          function () {}
        );
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(this.state.isLoading, this.state.destinations);
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
        <Text style={styles.title}>Các điểm đến hàng đầu</Text>
        <ScrollView
          horizontal={true}
          style={styles.slide}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {this.state.destinations.map((des, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  this.props.navigation.navigate("List", {
                    location: des,
                    option: 1,
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
                    <Text style={styles.text}>{des}</Text>
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

// export default function SlideDestinations() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Địa điểm nổi bật</Text>
//       <ScrollView horizontal={true} style={styles.slide} showsVerticalScrollIndicator ={false}
// showsHorizontalScrollIndicator={false}>
//         {destinations.map((des, i) => {
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
    height: 350,
    borderRadius: 10,
  },
  card: {
    marginRight: 5,
    marginLeft: 5,
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
    fontSize: 20,
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
    width: 185,
    height: 250,
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
