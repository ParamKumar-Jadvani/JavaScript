import {
  getCourses,
  getUser,
  getUserbyID,
  updateCourse,
  updateUser,
} from "../Components/api.js";
import { createElement, getElement, getValue } from "../Components/helper.js";
import navbar_Componenets from "../Components/navbar.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Componenets();

let courseData = [];

document.addEventListener("DOMContentLoaded", () => {
  getCoursesData();
});

const getCoursesData = async () => {
  const data = await getCourses();
  courseData = data;
  await UIView(courseData);
};

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

const courseList = document.getElementById("course-list");

const UIView = (data) => {
  courseList.innerHTML = "";

  data.map((elem, index) => {
    const colDiv = createElement("div", "", { class: "col course-card mx-3" });

    const bodyDiv = createElement("div", "", {});

    const titleDiv = createElement("div", `${elem.name} - ₹ ${elem.price}`, {
      class: "course-title",
    });

    const img = createElement("img", "", {
      src: elem.img,
      class: "img-fluid rounded",
      alt: "Course Image",
    });

    const topic = createElement("p", `<strong>Topic:</strong> ${elem.topic}`, {
      class: "mt-3",
    });

    const seats = createElement("p", `<strong>Topic:</strong> ${elem.seats}`, {
      class: "mt-3",
    });

    
    const accordion = createElement("div", "", { class: "accordion mt-3" });

    const accordionHeader = createElement("button", "Sub-Topics", {
      class: "accordion-button",
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": `#collapse-${index}`,
    });

    const accordionCollapse = createElement("div", "", {
      id: `collapse-${index}`,
      class: "accordion-collapse collapse",
    });

    const accordionBody = createElement("div", "", { class: "accordion-body" });

    elem.courseSubtopics.map((e) => {
      const subtopic = createElement("p", e);
      accordionBody.append(subtopic);
    });

    const buyButton = createElement("button", "Buy Now", {
      class: "buy-button mt-3",
    });

    buyButton.addEventListener("click", () => {
      addPurchases(elem, buyButton);
    });

    accordionCollapse.append(accordionBody);
    accordion.append(accordionHeader, accordionCollapse);
    bodyDiv.append(img, topic, seats, accordion, buyButton);
    colDiv.append(titleDiv, bodyDiv);
    courseList.append(colDiv);
  });
};

const addPurchases = async (elem, buyButton) => {
  if (loginData && loginData.role === "users") {
    const user = await getUserbyID(loginData.id);

    let foundUser = false;

    console.log(user.purchase);
    user.purchase.map((e) => {
      console.log(e);
    });

    user.purchase.map((e) => {
      if (e.id === elem.id) {
        buyButton.disabled = true;
        buyButton.innerHTML = "Purchased";
        foundUser = true;
        alert("Already Purchased");
      }
    });

    if (!foundUser && elem.seats > 0) {
      buyButton.disabled = true;
      buyButton.innerHTML = "Purchased";
      user.purchase.push({ ...elem });
      elem.seats -= 1;
      alert("Purchase Successful");
      await updateUser(user.id, user);
      await updateCourse(elem);
      getCoursesData();
    } else if (elem.seats <= 0) {
      alert("Not enough seats");
    }
  }
};

const sortData = (value) => {
  if (value == "LTH") {
    courseData.sort((a, b) => a.price - b.price);
    UIView(courseData);
  } else if (value == "HTL") {
    courseData.sort((a, b) => b.price - a.price);
    UIView(courseData);
  }
};

document.getElementById("HTL").addEventListener("click", () => sortData("HTL"));
document.getElementById("LTH").addEventListener("click", () => sortData("LTH"));

document.getElementById("course").addEventListener("submit", (e) => {
  e.preventDefault();
  const search_value = getValue("course-search");
  const filtered_courses = courseData.filter((elem) =>
    elem.name.toLowerCase().includes(search_value.toLowerCase())
  );
  UIView(filtered_courses);
});
