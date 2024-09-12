import { createProducts } from "../Components/api.js";
import {
  checkIsLogin,
  getElement,
  getElementQuerySelector,
} from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/Navbar.js";

const navbar = () => {
  const navbar = getElement("navbar");
  navbar.innerHTML = navbar_Components(checkIsLogin("isLogin"));

  document.addEventListener("DOMContentLoaded", function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = navbar_Styles();
    document.head.appendChild(styleTag);
  });
  
  document.getElementById("loginBtn").addEventListener("click", (event) => {
    console.log();
    if (event.target.innerHTML == "Login") {
      window.location.href = "/API/Json_Project/HTML/Login.html";
    } else if (event.target.innerHTML == "Logout") {
      logout();
    }
  });
};

const Product_Form = (event) => {
  event.preventDefault();
  const title = getElement("Title").value;
  const price = getElement("Price").value;
  const category = getElement("Category").value;
  const thumbnail = getElement("Image").value;
  const description = getElement("Description").value;

  const Data = {
    title,
    price,
    category,
    thumbnail,
    description,
  };
  createProducts(Data);
  form.reset();
};

navbar();
const form = getElementQuerySelector("#form");
form.addEventListener("submit", Product_Form);
