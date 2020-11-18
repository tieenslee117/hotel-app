//TODO: location search request
import { IN4_API_URL } from "../constants/key.js";
import { getPrice } from "./price.js";
/**
 * @param {string} location
 */
const getHotelsByLocation = async (location) => {
  let result = {}; // information of hotel
  console.log("day la location : ", location);
  let payload = { location: location };
  //   const res = await fetch(IN4_API_URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(payload),
  //   });
  //TODO: after response, use 3 id to get price
  const data = "3_4656943_20200830";
  const priceIn4 = await getPrice(data);
  console.log(priceIn4);
  // result = { priceIn4 };
  return priceIn4;
};

/**
 * @param {string} name
 */
const getHotelsByName = async (name) => {
  let result = {}; // information of hotel
  console.log("day la ten khach san: ", name);
  let payload = { name: name };
  //   const res = await fetch(IN4_API_URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(payload),
  //   });
  //TODO: after response, use 3 id to get price
  const priceIn4 = await getPrice("3_4656943_20200830");
  console.log(priceIn4);
  // result = { priceIn4 };
  return priceIn4;
};
export { getHotelsByLocation, getHotelsByName };
