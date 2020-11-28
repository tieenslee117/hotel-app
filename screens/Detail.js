import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  Dimensions,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
// import showStar from "../helpers/show-star";
import ImageView from "react-native-image-view";
import {
  rateFromNum,
  formatPrice,
  normalizeDescription,
} from "../helpers/normalize-helpers";
import { BaseColor } from "../configs/theme";
// import ListRoom from "../components/ListRoom";
import { ListRoom } from "../components/ListRoom";
import * as Progress from "react-native-progress";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

const logos = [
  "https://imgur.com/sRJmYdu.jpg",
  "https://imgur.com/Dsb2cYG.jpg",
  "https://imgur.com/yZdnZ6W.jpg",
  "https://imgur.com/kSieQw2.jpg",
];

function ScoreBar({ nameScore, score }) {
  console.log(score);
  function round(value, step) {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
  }
  if (score <= 0) score = 0;
  return (
    <View style={styles.scoreBar}>
      <Text style={styles.barLabel}>{nameScore}</Text>
      <View style={styles.barContainer}>
        <Progress.Bar
          progress={round(score, 0.5) / 10}
          // width={200}
          borderRadius={10}
          unfilledColor="#dedede"
          height={17}
          color={BaseColor.orangeColor}
          borderWidth={0}
        />
        <Text style={styles.scoreBarText}>{round(score, 0.5)}</Text>
      </View>
    </View>
  );
}

export default function Detail({ route, navigation }) {
  const [isImageView, setIsImageView] = useState(false);
  const [favorite, setFavorite] = useState("heart-outline");
  const [listRoom, setListRoom] = useState([]);
  const showStar = (n) => {
    let stars = [];
    let i = 0;
    for (; i < Math.floor(n); i++) {
      stars.push(
        <MaterialCommunityIcons
          key={i}
          name="star"
          color={BaseColor.yellowColor}
          size={20}
        />
      );
    }
    if (Math.round(n) != n) {
      stars.push(
        <MaterialCommunityIcons
          key={i}
          name="star-half"
          color={BaseColor.yellowColor}
          size={20}
        />
      );
    }
    return stars;
  };

  const {
    id,
    name,
    logo,
    star_number,
    overall_score,
    address,
    review_count,
    description,
    checkin_time,
    checkout_time,
    image_list,
    review_list,
    cleanliness_score,
    meal_score,
    location_score,
    service_score,
    sleep_quality_score,
    tours,
    night_club,
    relax_spa,
    relax_sauna,
    room_service_24_hour,
    poolside_bar,
    restaurants,
    shops,
    bar,
  } = route.params.item;
  console.log(service_score);
  const images =
    image_list == null
      ? [
          {
            source: {
              uri: logo,
            },
            width: 806,
            height: 720,
          },
        ]
      : image_list.map((link) => {
          return {
            source: {
              uri: link,
            },
            width: 806,
            height: 720,
          };
        });
  const price = formatPrice(route.params.item.suggest[0]["price"]);
  const domainId = route.params.item.suggest.provider;
  const services = {
    tours: tours,
    night_club: night_club,
    relax_spa: relax_spa,
    relax_sauna: relax_sauna,
    room_service_24_hour: room_service_24_hour,
    poolside_bar: poolside_bar,
    restaurants: restaurants,
    shops: shops,
    bar: bar,
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => setIsImageView(true)}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{ uri: logo }}
            />
          </TouchableOpacity>
          <ImageView
            images={images}
            imageIndex={0}
            isVisible={isImageView}
            onClose={() => {
              setIsImageView(false);
              return;
            }}
          />
        </View>

        <View style={styles.card}>
          {/* <TouchableOpacity
            onPress={() => {
              if (favorite == "heart") {
                setFavorite("heart-outline");
              } else setFavorite("heart");
            }}
            style={{
              // backgroundColor: "red",
              // zIndex: 1,
              // marginTop: -170,
              marginBottom: -20,
              // marginLeft: -100,
              marginLeft: -(Dimensions.get("window").width / 2 - 35),
            }}
          >
            <MaterialCommunityIcons
              name={favorite}
              color={BaseColor.orangeColor}
              size={40}
            />
          </TouchableOpacity> */}
          <Text style={styles.name}>{name}</Text>
          <View style={styles.star}>{showStar(star_number)}</View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Text style={styles.description}>
              {normalizeDescription(description)}
            </Text>
          </ScrollView>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.content}>
            <Text style={styles.label}>Đánh giá và xếp hạng</Text>
            <View style={styles.scoreContainer}>
              <View style={styles.scoreLeft}>
                <Text style={styles.scoreText}>{overall_score / 10}</Text>
              </View>
              <View style={styles.scoreRight}>
                <Text style={styles.scoreRes}>
                  {rateFromNum(overall_score)}
                </Text>
                <Text style={styles.reviewCount}>{review_count} đánh giá</Text>
              </View>
            </View>
            <View style={styles.anotherScore}>
              <View style={styles.anotherScoreLeft}>
                {service_score > 0 ? (
                  <ScoreBar nameScore="Phục vụ" score={service_score} />
                ) : null}
                {cleanliness_score > 0 ? (
                  <ScoreBar nameScore="Vệ sinh" score={cleanliness_score} />
                ) : null}
              </View>
              <View style={styles.anotherScoreRight}>
                {location_score > 0 ? (
                  <ScoreBar nameScore="Địa điểm" score={location_score} />
                ) : null}
                {meal_score > 0 ? (
                  <ScoreBar nameScore="Bữa ăn" score={meal_score} />
                ) : null}
              </View>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Dịch vụ</Text>
            <View style={styles.descriptionContainer}>
              <ScrollView
                horizontal={true}
                style={styles.services}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                {tours > 0 ? (
                  <View style={styles.service}>
                    <MaterialCommunityIcons
                      size={25}
                      name="flag-outline"
                      color={BaseColor.orangeColor}
                    />
                    <Text style={styles.serviceText}>tours</Text>
                  </View>
                ) : null}
                {bar > 0 ? (
                  <View style={styles.service}>
                    <Fontisto
                      size={25}
                      name="cocktail"
                      color={BaseColor.orangeColor}
                    />
                    <Text style={styles.serviceText}>bar</Text>
                  </View>
                ) : null}
                {poolside_bar > 0 ? (
                  <View style={styles.service}>
                    <MaterialIcons
                      size={25}
                      name="pool"
                      color={BaseColor.orangeColor}
                    />
                    <Text style={styles.serviceText}>pool</Text>
                  </View>
                ) : null}
                {room_service_24_hour > 0 ? (
                  <View style={styles.service}>
                    <MaterialCommunityIcons
                      size={25}
                      name="store-24-hour"
                      color={BaseColor.orangeColor}
                    />
                    <Text style={styles.serviceText}>24/7</Text>
                  </View>
                ) : null}
                {restaurants > 0 ? (
                  <View style={styles.service}>
                    <MaterialIcons
                      size={25}
                      name="restaurant"
                      color={BaseColor.orangeColor}
                    />
                    <Text style={styles.serviceText}>restaurant</Text>
                  </View>
                ) : null}
                {relax_spa > 0 ? (
                  <View style={styles.service}>
                    <MaterialCommunityIcons
                      size={25}
                      name="spa"
                      color={BaseColor.orangeColor}
                    />
                    <Text style={styles.serviceText}>spa</Text>
                  </View>
                ) : null}
                {relax_sauna > 0 ? (
                  <View style={styles.service}>
                    <Entypo
                      size={25}
                      name="air"
                      color={BaseColor.orangeColor}
                    />
                    <Text style={styles.serviceText}>sauna</Text>
                  </View>
                ) : null}
              </ScrollView>
            </View>
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>Vị trí</Text>
            <View style={styles.locationContainer}>
              <MaterialCommunityIcons
                name="map-marker"
                color={BaseColor.kashmir}
                size={20}
              />
              <Text style={styles.locationText}>{address}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Thời gian</Text>
            <View style={styles.timeContainer}>
              <View style={styles.time}>
                <Text style={styles.timeLabel}>Check-in</Text>
                <Text style={styles.timeVal}>{checkin_time}</Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeLabel}>Check-out</Text>
                <Text style={styles.timeVal}>{checkout_time}</Text>
              </View>
            </View>
          </View>
          {/* <View style={styles.content}>
            <Text style={styles.label}>Loại phòng của khách sạn</Text>
            <View style={styles.roomContainer}>
              <View style={styles.rooms}>
                <ListRoom domainId={domainId} hotelId={id} />
              </View>
            </View>
          </View> */}
          <View style={styles.content}>
            <Text style={styles.label}>Giá gợi ý của chúng tôi</Text>
            <View style={styles.providerContainer}>
              <TouchableOpacity
                onPress={() => {
                  const { provider, url, price } = route.params.item.suggest[0];
                  if (provider == 2)
                    Linking.openURL(
                      `https://www.traveloka.com/vi-vn/hotel/vietnam/{ten-khong-dau}-{domain_hotel_id}`
                    );
                  if (provider == 3)
                    Linking.openURL(`https://www.agoda.com${url}`);
                  if (provider == 5) Linking.openURL(url);
                }}
              >
                <View style={styles.provider}>
                  <View>
                    <Image
                      source={{
                        uri:
                          logos[
                            Number.parseInt(
                              route.params.item.suggest[0]["provider"]
                            ) - 2
                          ],
                      }}
                      style={{ width: 100, height: 100 }}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.providerPrice}>
                    <View>
                      <Text
                        style={{
                          color: BaseColor.orangeColor,
                          fontSize: 20,
                          fontWeight: "400",
                        }}
                      >
                        {price}
                      </Text>
                      <Text
                        style={{
                          color: BaseColor.orangeColor,
                          fontSize: 20,
                          fontWeight: "400",
                        }}
                      >
                        /đêm
                      </Text>
                    </View>
                    <MaterialIcons
                      name="navigate-next"
                      size={30}
                      color={BaseColor.orangeColor}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Giá tham khảo thêm</Text>

            <View style={styles.providerContainer}>
              {route.params.item.suggest.length > 1 ? (
                route.params.item.suggest.map((e, i) => {
                  if (i > 0) {
                    const { provider, price, url } = e;
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          if (provider == 2)
                            Linking.openURL(
                              `https://www.traveloka.com/vi-vn/hotel/vietnam/{ten-khong-dau}-{domain_hotel_id}`
                            );
                          if (provider == 3)
                            Linking.openURL(`https://www.agoda.com${url}`);
                          if (provider == 5) Linking.openURL(url);
                        }}
                      >
                        <View style={styles.provider}>
                          <View>
                            <Image
                              source={{
                                uri: logos[Number.parseInt(provider) - 2],
                              }}
                              style={{ width: 100, height: 100 }}
                              resizeMode="contain"
                            />
                          </View>
                          <View style={styles.providerPrice}>
                            <View>
                              <Text
                                style={{
                                  color: BaseColor.orangeColor,
                                  fontSize: 20,
                                  fontWeight: "400",
                                }}
                              >
                                {formatPrice(price)}
                              </Text>
                              <Text
                                style={{
                                  color: BaseColor.orangeColor,
                                  fontSize: 20,
                                  fontWeight: "400",
                                }}
                              >
                                /đêm
                              </Text>
                            </View>
                            <MaterialIcons
                              name="navigate-next"
                              size={30}
                              color={BaseColor.orangeColor}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  }
                })
              ) : (
                <Text style={{ fontSize: 18, color: BaseColor.kashmir }}>
                  Hiện tại không có sẵn
                </Text>
              )}
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Một số phản hồi của khách hàng</Text>
            <Text style={{ fontSize: 18, color: BaseColor.kashmir }}>
              Hiện tại không có sẵn
            </Text>
            {/* <View style={styles.reviewContainer}>
              <View>
                {review_list.map((rv) => {
                  const { review, overall_score, domain, date, user } = rv;
                  return (
                    <View style={styles.review}>
                      <View style={styles.reviewInfo}>
                        <View style={styles.reviewLeft}>
                          <Text style={styles.userText}>{user}</Text>
                          <View style={styles.reviewMain}>
                            <View style={styles.reviewScore}>
                              <View style={styles.reviewTag}>
                                <Text style={{ color: "#fff" }}>
                                  {overall_score}
                                </Text>
                              </View>
                              <Text
                                style={{
                                  fontSize: 20,
                                  textAlign: "center",
                                  color: BaseColor.kashmir,
                                }}
                              >
                                {rateFromNum(overall_score)}
                              </Text>
                            </View>
                            <Text style={styles.reviewDate}>{date}</Text>
                          </View>
                        </View>
                        <View style={styles.reviewRight}>
                          <Image
                            source={{
                              uri: logos[Number.parseInt(domain) - 2],
                            }}
                            style={{ width: 70, height: 70 }}
                            resizeMode="contain"
                          />
                        </View>
                      </View>
                      <ScrollView
                        style={styles.scrollView}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                      >
                        <Text
                          style={{
                            fontSize: 18,
                            marginTop: 15,
                            marginBottom: 10,
                          }}
                        >
                          {review}
                        </Text>
                      </ScrollView>
                    </View>
                  );
                })}
              </View>
            </View> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  mainContainer: {
    margin: 20,
  },
  content: {
    marginBottom: 20,
    borderTopColor: BaseColor.dividerColor,
    borderTopWidth: 1,
    paddingTop: 20,
  },

  scrollView: {},
  imageContainer: {},
  image: {
    width: "100%",
    height: 190,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
    marginTop: -60,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    // elevation : 5,
    height: 250,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    // flex: 1,
  },
  label: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "500",
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },
  star: {
    flexDirection: "row",
    margin: 5,
  },
  description: {
    color: BaseColor.grayColor,
    textAlign: "center",
    marginTop: 5,
  },
  scoreContainer: {
    // height: 80,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  score: {},
  scoreLeft: {
    backgroundColor: BaseColor.orangeColor,
    height: 60,
    width: 60,
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  scoreRight: {
    height: 50,
    justifyContent: "space-between",
    alignContent: "center",
    marginLeft: 18,
  },
  scoreText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  scoreRes: {
    fontSize: 18,
    fontWeight: "600",
    color: BaseColor.orangeColor,
  },
  reviewCount: {
    fontSize: 16,
    fontWeight: "300",
    color: BaseColor.grayColor,
  },
  review: {
    // flexDirection: "row",
    borderWidth: 1,
    borderColor: BaseColor.grayColor,
    backgroundColor: BaseColor.grayColor2,
    borderRadius: 6,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
    height: 250,
    marginBottom: 20,
  },
  userText: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 10,
  },
  reviewInfo: {
    flexDirection: "row",
  },
  reviewLeft: {
    flex: 0.6,
    // marginLeft: 15,
    alignItems: "flex-start",
    // backgroundColor: "blue",
  },
  reviewRight: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  reviewMain: {},
  reviewScore: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  reviewTag: {
    borderRadius: 5,
    borderTopRightRadius: 0,
    backgroundColor: BaseColor.orangeColor,
    width: 45,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  reviewDate: {
    fontSize: 16,
    color: BaseColor.grayColor,
  },
  anotherScore: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },
  anotherScoreLeft: {
    // backgroundColor: "red",
    flex: 0.48,
  },

  anotherScoreRight: {
    flex: 0.48,
  },

  scoreBar: {
    marginBottom: 15,
  },
  barContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  barLabel: {
    fontSize: 14,
    color: BaseColor.kashmir,
    marginBottom: 5,
  },
  scoreBarText: {
    fontSize: 13,
    marginLeft: 15,
  },

  descriptionContainer: {},
  services: {
    marginTop: 5,
    marginLeft: 10,
  },
  service: {
    // flex: 0.25,
    marginRight: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceText: {
    color: BaseColor.kashmir,
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
  featureContainer: {},
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 18,
    fontWeight: "500",
    color: BaseColor.kashmir,
  },
  timeContainer: {
    flexDirection: "row",
  },
  time: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  timeLabel: {
    fontSize: 16,
    // fontWeight: "bold",
    color: BaseColor.grayColor,
    marginBottom: 5,
  },
  timeVal: {
    fontSize: 15,
    color: BaseColor.kashmir,
  },
  roomContainer: {
    margin: 0,
  },

  providerContainer: {},
  provider: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: BaseColor.grayColor,
    backgroundColor: BaseColor.grayColor2,
    borderRadius: 6,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
    height: 80,
    marginBottom: 20,
  },
  providerPrice: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
