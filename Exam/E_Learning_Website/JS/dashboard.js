import { getCourses } from "../Components/api.js";
import { createElement, getElement } from "../Components/helper.js";
import navbar_Componenets from "../Components/navbar.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Componenets();

const loginData = JSON.parse(localStorage.getItem("loginData")) || {};
console.log(loginData);

document.getElementById("courses").addEventListener("click", async (e) => {
  e.preventDefault();

  if (loginData) {
    if (loginData.role === "users") {
      alert("Only admin can create courses");
    } else {
      window.location.href = "/Exam/E_Learning_Website/Html/createCourse.html";
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  getCoursesData();
});

const getCoursesData = async () => {
  const data = await getCourses();
  UIView(data);
};

const courseList = document.getElementById("course-list");

const UIView = (data) => {
  courseList.innerHTML = ""; 

  data.map((elem, index) => {
    const colDiv = createElement("div", "", { class: "col course-card" });

    const bodyDiv = createElement("div", "", {});

    const titleDiv = createElement("div", `${elem.name} - ₹${elem.price}`, {
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

    accordionCollapse.append(accordionBody);
    accordion.append(accordionHeader, accordionCollapse);
    bodyDiv.append(img, topic, seats, accordion);
    colDiv.append(titleDiv, bodyDiv);
    courseList.append(colDiv);
  });
};

document.getElementById("course").addEventListener("submit", (e) => {
  e.preventDefault();
  const search_value = getValue("course-search");
  const filtered_courses = courseData.filter((elem) =>
    elem.name.toLowerCase().includes(search_value.toLowerCase())
  );
  UIView(filtered_courses);
});
