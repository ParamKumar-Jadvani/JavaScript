import { navbar_Components } from "../Components/Navbar.js";
import { getElement } from "../Components/helper.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Components();
const signup = JSON.parse(localStorage.getItem("signupData")) || {};
const loginForm = getElement("loginForm");
const isLogin = JSON.parse(localStorage.getItem("isLogin")) || false;

const login = (event) => {
  event.preventDefault();
  const email = getElement("email").value;
  const password = getElement("password").value;

  if (!isLogin) {
    alert("Please Login First");
    window.location.href = "signup.html";
  } else {
    if (signup.email === email) {
      if (signup.password === password) {
        alert("Login successful");
        isLogin = true;
        window.location.href = "index.html";
      } else {
        alert("Wrong Password");
        window.location.reload();
      }
    } else {
      alert("Account not found");
      window.location.href = "signup.html";
    }
  }
};

loginForm.addEventListener("submit", login, false);
