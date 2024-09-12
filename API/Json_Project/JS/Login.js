import { getUsers } from "../Components/api.js";
import { checkIsLogin, getElement } from "../Components/Helper.js";
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

const LoginData = async (event) => {
  event.preventDefault();
  const email = getElement("email").value;
  const password = getElement("password").value;

  const userData = await getUsers(email);

  if (userData.length == 0 || !userData) {
    alert("Account not found");
    window.location.href = "Signup.html";
  }

  if (userData[0].email === email) {
    if (userData[0].password === password) {
      alert("Login successful");
      localStorage.setItem("isLogin", JSON.stringify(userData[0]));
      window.location.href = "../index.html";
    } else {
      alert("Wrong Password");
      localStorage.setItem("isLogin", false);
      window.location.reload();
    }
  } else {
    alert("Account not found");
    window.location.href = "Signup.html";
  }
};

const loginForm = getElement("LoginForm");
loginForm.addEventListener("submit", LoginData);
navbar();
