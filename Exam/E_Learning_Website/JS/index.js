import { getCourses } from "../Components/api.js";
import { getElement } from "../Components/helper.js";
import navbar_Componenets from "../Components/navbar.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Componenets();

document.addEventListener("DOMContentLoaded", async () => {
  const data = await getCourses();
  await UIView(data);
});

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
  console.log(data);
  data.map((elem) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col";

    const cardDiv = document.createElement("div");
    cardDiv.className = "course-card";

    const titleDiv = document.createElement("div");
    titleDiv.className = "course-title";
    titleDiv.textContent = elem.name;

    const bodyDiv = document.createElement("div");
    bodyDiv.className = "course-body";

    const img = document.createElement("img");
    img.src = elem.img;
    img.className = "img-fluid rounded";
    img.alt = "Course Image";

    const topicPara = document.createElement("p");
    topicPara.className = "mt-3";
    topicPara.innerHTML = `<strong>Topic:</strong> ${elem.topic}`;

    const subtopicDiv = document.createElement("div");
    subtopicDiv.className = "mt-3";
    const subtopicTitle = document.createElement("p");
    subtopicTitle.innerHTML = `<strong>Sub-Topics:</strong>`;
    subtopicDiv.append(subtopicTitle);

    elem.courseSubtopics.map((e) => {
      const subtopicPara = document.createElement("p");
      subtopicPara.textContent = e;
      subtopicDiv.append(subtopicPara);
    });

    const buyButton = document.createElement("button");
    buyButton.className = "buy-button mt-3";
    buyButton.textContent = "Buy";
    buyButton.onclick = () => alert(`Purchased ${elem.name}`);

    bodyDiv.append(img, topicPara, subtopicDiv, buyButton);
    cardDiv.append(titleDiv, bodyDiv);
    colDiv.append(cardDiv);
    courseList.append(colDiv);
  });
};
