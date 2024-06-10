const newsCollection = JSON.parse(localStorage.getItem("newsData")) || [];
const userdata = JSON.parse(localStorage.getItem("userData"));
const Variables = {
  Like: parseInt(localStorage.getItem("Like")) || 0,
  Share: parseInt(localStorage.getItem("Share")) || 0,
};

const newsData = (data) => {
  let newsDataId = document.querySelector("#newsData");
  newsDataId.innerHTML = "";
  data.map((news) => {
    let title = document.createElement("h3");
    let content = document.createElement("p");
    let img = document.createElement("img");
    let country = document.createElement("p");
    let like = document.createElement("btn");
    let share = document.createElement("btn");
    let div = document.createElement("div");
    let span = document.createElement("span");

    span.innerHTML = "0";

    title.innerHTML = `<span class="title">${news.newsTitle}</span>`;
    content.innerHTML = `<span id="content">${news.newsContent}</span>`;
    img.src = news.imageUrl;
    country.innerHTML = `Country : <span class="ctry">${news.Country}</span>`;
    like.innerHTML = `<img src="../Image/like.png" alt="" class="img-fluid w-50">
    <span class="badge badge-light">${
      Variables[like] === undefined ? `00` : Variables[like]
    }</span>`;

    share.innerHTML = `<img src="../Image/share.png" alt="" class="img-fluid w-50">
    <span class="badge badge-light">${
      Variables[share] === undefined ? `00` : Variables[share]
    }</span>`;

    title.setAttribute("class", "m-2");
    img.setAttribute("class", "m-2 ");
    content.setAttribute("class", "m-3");
    country.setAttribute("class", "m-3");
    div.setAttribute("class", "m-3");

    like.className = "btn btn-primary position-relative m-2";
    share.className = "btn btn-primary position-relative m-2";
    like.setAttribute("iconName", "Like");
    share.setAttribute("iconName", "Share");

    div.append(title, img, content, country, like, share);

    like.addEventListener("click", Counter_Storage);
    share.addEventListener("click", Counter_Storage);

    newsDataId.appendChild(div);
  });
};

const userForm = (data) => {
  let userId = document.querySelector("#userForm");

  userId.innerHTML = "";

  let name = document.createElement("h3");
  let email = document.createElement("p");
  let img = document.createElement("img");
  let country = document.createElement("p");

  img.src = data.imageUrl;
  name.innerHTML = `<span class="title">${data.name}</span>`;
  email.innerHTML = `Email : <span id="email">${data.email}</span>`;
  country.innerHTML = `Country : <span class="ctry">${data.country}</span>`;

  userId.append(img, name, email, country);
};

const Counter_Storage = (event) => {
  const type = event.currentTarget.getAttribute("iconName");
  Variables[type]++;
  localStorage.setItem(type, Variables[type]);
  event.currentTarget.querySelector("span").textContent = Variables[type];
};

const countryNews = (event) => {
  event.preventDefault();
  const countryName = event.target.getAttribute("country");
  const filteredNews =
    countryName !== "All"
      ? newsCollection.filter((news) => news.Country === countryName)
      : newsCollection;
  newsData(filteredNews);
};

document.querySelectorAll("#country div button").forEach((element) => {
  element.addEventListener("click", countryNews);
});

newsData(newsCollection);
userForm(userdata);
