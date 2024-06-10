let newsCollection = JSON.parse(localStorage.getItem("newsData")) || [];

const newsData = (data) => {
  document.querySelector("#newsData").innerHTML = "";
  data.map((news) => {
    
  });
};
