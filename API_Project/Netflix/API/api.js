// const url =
//   "https://netflix-data.p.rapidapi.com/season/episodes/?ids=80077209%2C80117715&offset=0&limit=25";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "26b760bc2fmsh44984916f352a01p197084jsn24299c77fe81",
//     "x-rapidapi-host": "netflix-data.p.rapidapi.com",
//   },
// };

// const getData = async () => {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text;
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

const url =
  "https://netflix54.p.rapidapi.com/season/episodes/?ids=80077209%2C80117715&offset=0&limit=25&lang=en";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "26b760bc2fmsh44984916f352a01p197084jsn24299c77fe81",
    "x-rapidapi-host": "netflix54.p.rapidapi.com",
  },
};

const getData = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

getData();
