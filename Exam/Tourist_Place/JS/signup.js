import { navbar_Components } from "../Components/Navbar.js";
import { getElement } from "../Components/helper.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Components();
const signup = JSON.parse(localStorage.getItem("signupData")) || {};

const signupForm = getElement("signupForm");
const signupData = (event) => {
  event.preventDefault();
  const name = getElement("name").value;
  const email = getElement("email").value;
  const password = getElement("password").value;
  const data = {
    name,
    email,
    password,
  };
  localStorage.setItem("signupData", JSON.stringify(data));
  window.location.href = "login.html";
};

signupForm.addEventListener("submit", signupData);
