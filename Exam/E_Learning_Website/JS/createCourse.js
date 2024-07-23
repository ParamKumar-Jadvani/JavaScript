import { createCourse } from "../Components/api.js";
import { createElement, getElement } from "../Components/helper.js";
import navbar_Componenets from "../Components/navbar.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Componenets();

const loginData = JSON.parse(localStorage.getItem("loginData"));
console.log(loginData);

document.getElementById("sub-topic-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const newInput = createElement("input", "", { type: "text", class: "m-1" });
  document.getElementById("subtopic").appendChild(newInput);
});

document
  .getElementById("createCourse")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const img = document.getElementById("image").value;
    const topic = document.getElementById("topic").value;
    const courseSubtopics = Array.from(
      document.querySelectorAll("#subtopic input")
    ).map((input) => input.value);
    const price = document.getElementById("price").value;

    const courseData = {
      name,
      img,
      topic,
      courseSubtopics,
      price,
    };
    createCourse(courseData);
  });
