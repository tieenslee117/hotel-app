export const getDestinations = (page, point) => {
  const data = fetch(`http://13.212.124.210:8888/top_province?page=${page}`)
    .then((response) => response.json())
    .then((responseJson) => {
      point.setState(
        {
          isLoading: false,
          destinations: responseJson.map((e) => {
            const { values } = e;
            return {
              name: values[0],
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
