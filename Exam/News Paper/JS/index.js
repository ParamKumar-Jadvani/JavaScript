const newsCollection = JSON.parse(localStorage.getItem("newsData")) || [];
const userdata = JSON.parse(localStorage.getItem("userData"));

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

    title.innerHTML = `<span class="title">${news.newsTitle}</span>`;
    content.innerHTML = `<span id="content">${news.newsContent}</span>`;
    img.src = news.imageUrl;
    country.innerHTML = `Country : <span class="ctry">${news.Country}</span>`;
    like.innerHTML = `<button
        type="button"
        class="btn btn-primary position-relative m-2"
        id="Like"
        iconName="Like"
      >
        <i class="fa-solid fa-heart"></i>
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          id="badge"
        >
          0
        </span></button
      >`;
    share.innerHTML = `<button
        type="button"
        class="btn btn-primary position-relative m-2"
        id="Share"
        iconName="Share"
      >
        <i class="fa-solid fa-share"></i>
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          0
        </span></button
      >`;

    title.setAttribute("class", "m-2");
    img.setAttribute("class", "m-2 img-fluid");
    content.setAttribute("class", "m-3");
    country.setAttribute("class", "m-3");
    div.setAttribute("class", "m-3");

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

const Variables = {
  Like: parseInt(localStorage.getItem("Like")) || 0,
  Share: parseInt(localStorage.getItem("Share")) || 0,
};

const Counter_Storage = (event) => {
  const type = event.target.getAttribute("iconName");
  const span = event.target.querySelector("span");
  let iconNum = Variables[type];
  console.log(iconNum, type, Variables[type]);
  iconNum++;
  span.innerHTML = iconNum;

  Variables[type] = iconNum;
  console.log(localStorage.getItem(type));
};

newsData(newsCollection);
userForm(userdata);
