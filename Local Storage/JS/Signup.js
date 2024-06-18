import { getElement, getValue } from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/Navbar.js";

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

const SignUpData = (event) => {
  event.preventDefault();

  if (isLogin) {
    alert("You have already signed up!! Please Login into your account");
    window.location.href = "login.html";
    return;
  }

  const name = getValue("inputName");
  const email = getValue("inputEmail");
  const password = getValue("inputPassword");
  const confirmPassword = getValue("inputConfirmPassword");

  if (password === confirmPassword) {
    const userData = {
      name,
      email,
      password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "login.html";
  } else {
    alert("Password Not Match");
    window.location.reload();
  }
};

const signUpForm = getElement("SignupForm");
signUpForm.addEventListener("submit", SignUpData);
navbar();
