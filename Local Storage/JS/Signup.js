import { getElement, getValue } from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/Navbar.js";

const isLogin = localStorage.getItem("isLogin") || false;
const signUpForm = getElement("SignupForm");

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
      const userData = {
        name,
        email,
        password,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Form submitted successfully!");
      window.location.href = "login.html";
    }
  } else {
    signUpForm.classList.add("was-validated");
  }
};

signUpForm.addEventListener("submit", SignUpData);
navbar();
