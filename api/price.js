import { PRICE_API_URL, TOKEN } from "../configs/key.js";
//pattern : {domain_id}_{domain_hotel_id}_{checkin_date_id}
/**
 * @param {string} data
 */
const getPrice = async (data) => {
  const payload = {
    hotel_ids: `${data}`,
  };

  const raw = JSON.stringify({ hotel_ids: data });
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Basic ${TOKEN}`);
  // myHeaders.append("Access-Control-Allow-Origin", "*");
  // myHeaders.append("Accept", "*/*");
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    credentials: "include",
    method: "POST",
    headers: myHeaders,
    // mode: "no-cors",
    body: raw,
    redirect: "follow",
  };

  fetch("https://tripgle.data.tripi.vn/get_price", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export { getPrice };
