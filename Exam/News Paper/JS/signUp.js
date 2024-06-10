let newsCollection = JSON.parse(localStorage.getItem("newsData")) || [];

const newsData = (event) => {
  event.preventDefault();

  const newsTitle = document.querySelector("#newsTitle").value;
  const newsContent = document.querySelector("#newsContent").value;
  const imageUrl = document.querySelector("#imageUrl").value;
  const country = document.querySelector("#Country").value;

  const news = { newsTitle, newsContent, imageUrl, country };

  newsCollection.push(news);
  localStorage.setItem("newsData", JSON.stringify(newsCollection));

  window.location.href = "index.html";
};

document.querySelector("form").addEventListener("submit", newsData);
