import { getAdmins, getUser } from "../Components/api.js";
import { getElement } from "../Components/helper.js";
import navbar_Componenets from "../Components/navbar.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Componenets();

const loginData = JSON.parse(localStorage.getItem("loginData")) || {};
console.log(loginData);

document.getElementById("courses").addEventListener("click", async (e) => {
  e.preventDefault();

  if (loginData) {
    console.log(loginData);
    if (loginData.role === "users") {
      alert("Only admin can create courses");
    } else {
      window.location.href = "/Exam/E_Learning_Website/Html/createCourse.html";
    }
  }
});

document.getElementById("login").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    email,
    password,
  };
  if (!(await existUser(email))) {
    alert("email does not exist");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    return;
  } else {
    const existUserData = await existUser(email);
    user.role = existUserData.role;

    if (password === existUserData.password) {
      user.id = existUserData.id;
      localStorage.setItem("loginData", JSON.stringify(user));
      console.log(user);
      window.location.href = "/Exam/E_Learning_Website/index.html";
    } else {
      alert("Invalid password");
      document.getElementById("password").value = "";
    }
  }
});

const existUser = async (email) => {
  const users = await getUser();
  const admins = await getAdmins();
  const existingUser = users.find((u) => u.email === email);
  const existingAdmins = admins.find((u) => u.email === email);
  if (existingUser) return await existingUser;
  else if (existingAdmins) return await existingAdmins;
};
