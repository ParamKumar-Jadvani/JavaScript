import { getUserData } from "../Components/api.js";
import { getElement } from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/navbar.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Components();

document.addEventListener("DOMContentLoaded", function () {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = navbar_Styles();
  document.head.appendChild(styleTag);
});

document.getElementById("login").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    email,
    password,
  };

  getUserData(user);
});
