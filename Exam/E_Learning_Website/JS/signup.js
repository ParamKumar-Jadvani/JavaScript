import { createAdmin_User, getAdmins, getUser } from "../Components/api.js";
import { getElement } from "../Components/helper.js";
import navbar_Componenets from "../Components/navbar.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Componenets();

const regerx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

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

document.getElementById("signup").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!regerx.test(password)) {
    console.log(regerx.test(password));
    alert(
      "Password should be between 6 and 16 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    );
    return;
  }

  if (await existUser(email, role)) {
    console.log(await existUser(email, role));
    alert("Email already exists!");
    return;
  }

  const user =
    role == "users"
      ? {
          name,
          email,
          password,
          role,
          purchase: [],
          cart: [],
        }
      : { name, email, password, role };

  createAdmin_User(user, role);
});

const existUser = async (email, role) => {
  const users = await getUser();
  const admins = await getAdmins();

  const existingUser = users.find((u) => u.email === email);
  const existingAdmins = admins.find((u) => u.email === email);

  if (existingUser || existingAdmins) return await true;
  else return await false;
};
