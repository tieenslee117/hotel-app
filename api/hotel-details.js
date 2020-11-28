import { IN4_API_URL } from "../configs/key.js";
import { getPrice } from "./price.js";

/**
 * @param {string} location
 */
const getHotelsByLocation = async (page, location, point) => {
  fetch(`http://13.212.124.210:8888/search_query?page=${page}&key=${location}`)
    .then((response) => response.json())
    .then((responseJson) => {
      point.setState(
        {
          isLoading: false,
          list: responseJson.map((hotel) => {
            const { values } = hotel;
            const providers = new Set(values[9]);
            return {
              id: values[0],
              address: values[1],
              name: values[2],
              score: values[3],
              price: String(values[4])
                .slice(0, values[4].length - 3)
                .concat("000"),
              domainId: values[5],
              star: values[8],
              providers: values[9],
              image: images[Math.floor(Math.random() * images.length)],
              numOfReviews: "999",
            };
          }),
        },
        function () {}
      );
    })
    .catch((error) => {
      console.error(error);
    });
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
