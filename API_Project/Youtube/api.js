const url =
  "https://find-my-netflix-series.p.rapidapi.com/getSeriesById?id=80192098";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "26b760bc2fmsh44984916f352a01p197084jsn24299c77fe81",
    "x-rapidapi-host": "find-my-netflix-series.p.rapidapi.com",
  },
};

const data = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

data();
