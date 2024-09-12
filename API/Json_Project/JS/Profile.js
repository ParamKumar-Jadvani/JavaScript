import { checkIsLogin, getElement, logout } from "../Components/Helper.js";
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

const loadUserProfile = () => {
  const data = JSON.parse(localStorage.getItem("isLogin"));

  if (data) {
    document.getElementById("profileName").innerHTML = data.name;
    document.getElementById("profileEmail").innerHTML = data.email;
  } else {
    window.location.href = "/API/Json_Project/HTML/Login.html";
  }
};

loadUserProfile();

navbar();
