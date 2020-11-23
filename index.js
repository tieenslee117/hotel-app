document.getElementById("test").addEventListener("click", (e) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    mode: "no-cors",
  };

  fetch(
    `http://localhost:8082/search_query?page=5&key=hai phong`,
    requestOptions
  )
    .then((response) => {
      console.log(response.text());
      return response.text();
    })
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
});
