import { getUsers } from "../Components/api.js";
import { getElement } from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/Navbar.js";

const navbar = () => {
  const navbar = getElement("navbar");
  navbar.innerHTML = navbar_Components();

  document.addEventListener("DOMContentLoaded", function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = navbar_Styles();
    document.head.appendChild(styleTag);
  });
};

const LoginData = async (event) => {
  event.preventDefault();
  const email = getElement("email").value;
  const password = getElement("password").value;

  const userData = await getUsers(email);
  console.log(userData[0]);
  console.log(userData[0].email === email);

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
