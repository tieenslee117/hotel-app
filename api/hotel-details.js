//TODO: location search request
import { IN4_API_URL } from "../configs/key.js";
import { getPrice } from "./price.js";

/**
 * @param {string} location
 */
const getHotelsByLocation = async (page, location) => {
  let result = {}; // information of hotel
  console.log("day la location : ", location);
  let payload = { page: page, key: location };
  const res = await fetch(
    `${IN4_API_URL}/search_query?page=${page}&key=${location}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
  //TODO: after response, use 3 id to get price
  // const data = "3_4656943_20200830";
  // const priceIn4 = await getPrice(data);
  // console.log(priceIn4);
  // // result = { priceIn4 };
  // return priceIn4;
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
