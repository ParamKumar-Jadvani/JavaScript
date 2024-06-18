import { getElement } from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/Navbar.js";

const signUpData = JSON.parse(localStorage.getItem("userData")) || {};
const isLogin = localStorage.getItem("isLogin") || false;

const navbar = () => {
  const navbar = getElement("navbar");
  navbar.innerHTML = navbar_Components();

  document.addEventListener("DOMContentLoaded", function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = navbar_Styles();
    document.head.appendChild(styleTag);
  });
};

const LoginData = (event) => {
  event.preventDefault();
  const email = getElement("email").value;
  const password = getElement("password").value;

  if (signUpData.email === email) {
    if (signUpData.password === password) {
      alert("Login successful");
      localStorage.setItem("isLogin", true);
      window.location.href = "../index.html";
    } else {
      alert("Wrong Password");
      localStorage.setItem("isLogin", false);
      window.location.reload();
    }
  } else {
    alert("Account not found");
    window.location.reload();
  }
};

const loginForm = getElement("LoginForm");
loginForm.addEventListener("submit", LoginData);
navbar();
