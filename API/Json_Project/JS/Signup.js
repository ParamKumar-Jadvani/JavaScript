import { createUser } from "../Components/api.js";
import { checkIsLogin, getElement, getValue } from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/Navbar.js";

const signUpForm = getElement("SignupForm");

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

const SignUpData = (event) => {
  event.preventDefault();

  if (signUpForm.checkValidity()) {
    const password = getValue("inputPassword");
    const confirmPassword = getValue("inputConfirmPassword");

    if (password !== confirmPassword) {
      getElement("inputConfirmPassword").setCustomValidity(
        "Passwords do not match."
      );
    } else {
      getElement("inputConfirmPassword").setCustomValidity("");
      const name = getValue("inputName");
      const email = getValue("inputEmail");
      const password = getValue("inputPassword");
      const userData = {
        name,
        email,
        password,
        phone: "0123456789",
        city: "Surat",
        role: "users",
        purchase: [],
        cart: [],
      };
      createUser(userData);
      alert("Form submitted successfully!");
      window.location.href = "Login.html";
    }
  } else {
    signUpForm.classList.add("was-validated");
  }
};

const confirmPassword = (event) => {
  event.preventDefault();
  const password_Value = getValue("inputPassword");
  const confirmPassword_Value = getValue("inputConfirmPassword");
  if (password_Value === confirmPassword_Value) {
    getElement("inputConfirmPassword").setCustomValidity("");
  } else {
    getElement("inputConfirmPassword").setCustomValidity(
      "Passwords do not match."
    );
  }
};

signUpForm.addEventListener("submit", SignUpData);
document
  .getElementById("inputConfirmPassword")
  .addEventListener("keyup", confirmPassword);
navbar();
