import { getFoodData, getUsers, updateUser } from "../Components/api.js";
import { createElement, getElement } from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/navbar.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Components();

document.addEventListener("DOMContentLoaded", function () {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = navbar_Styles();
  document.head.appendChild(styleTag);
});

const user = JSON.parse(localStorage.getItem("loginUser"));
let city = user.city;

(async () => {
  console.log(city);
  const food = await getFoodData();
  const filterFood = food.filter(
    (elem) => city.toLowerCase() == elem.city.toLowerCase()
  );
  console.log(filterFood);
  UI(filterFood);
})();

const UI = (data) => {
  document.getElementById("food").innerHTML = "";

  data.map((elem) => {
    const foodItem = document.createElement("div", { class: "foodItem" });
    const img = createElement("img", "", {
      src: `${elem.image}`,
      class: "food-img",
    });
    const name = createElement("h3", elem.name);
    const ratingTag = createElement("i", "", { class: "fa-solid fa-star m-2" });
    const rating = createElement("h5", `${elem.rating}`);
    const price = createElement("h4", `Price : ${elem.price}`);
    const ratingDiv = createElement("div", "", { class: "d-flex" });
    const buyBtn = createElement("button", "Add to Cart", {
      class: "btn btn-success m-2",
    });
    ratingDiv.append(ratingTag, rating);

    foodItem.append(img, name, ratingDiv, price, buyBtn);
    document.getElementById("food").append(foodItem);

    buyBtn.addEventListener("click", async () => {
      const users = await getUsers();
      const userData = await users.find((u) => u.id == user.id);

      userData.cart.map((e) => {
        if (e.id === elem.id) {
          e.qty += 1;
          console.log(userData.cart);
          updateUser(userData.id, userData);
          console.log(userData);
          alert("Product already in cart!");
          return;
        } else {
          userData.cart.push({ ...elem, qty: 1 });
          updateUser(userData.id, userData);
          alert("Product added to Cart!");
          return;
        }
      });
      localStorage.setItem("loginUser", JSON.stringify(user));
      alert("Product added to Cart!");
    });
  });
};

document.getElementById("apply").addEventListener("click", async (event) => {
  event.preventDefault();
  const food = await getFoodData();
  const filterFood = await food.filter(
    (elem) => city.toLowerCase() == elem.city.toLowerCase()
  );

  const selectedPrice = document.querySelector(
    'input[name="price"]:checked'
  )?.value;

  if (selectedPrice == "HTL") filterFood.sort((a, b) => b.price - a.price);
  else if (selectedPrice == "LTH") filterFood.sort((a, b) => a.price - b.price);

  UI(filterFood);
});

document.getElementById("search").addEventListener("submit", async (event) => {
  event.preventDefault();
  const food = await getFoodData();
  const filterFood = await food.filter(
    (elem) => city.toLowerCase() == elem.city.toLowerCase()
  );

  const searchValue = document.getElementById("search-food").value;
  const searchProducts = filterFood.filter((elem) =>
    elem.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  UI(searchProducts);
});

document.getElementById("city").addEventListener("submit", async (event) => {
  event.preventDefault();
  city = document.getElementById("search-city").value;
  const food = await getFoodData();
  const filterFood = await food.filter(
    (elem) => city.toLowerCase() == elem.city.toLowerCase()
  );

  UI(filterFood);
});
