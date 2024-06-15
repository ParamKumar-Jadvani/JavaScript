import { getElement, getValue } from "../Components/Helper.js";
import { navbar_Components } from "../Components/Navbar.js";
import { navbar_Styles } from "../Components/Styles.js";

let bookList = JSON.parse(localStorage.getItem("bookList")) || [];

const Navbar_Design = () => {
  const navbar = getElement("navbar");
  navbar.innerHTML = navbar_Components();

  document.addEventListener("DOMContentLoaded", function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `${navbar_Styles()}`;
    document.head.appendChild(styleTag);
  });
};

const BookFormData = (event) => {
  event.preventDefault();
  const bookTitle = getValue("bookTitle") || "";
  const authorName = getValue("authorName") || "";
  const bookPrice = getValue("Price") || 0;
  const bookCategory = getValue("Category") || "";
  const date = getValue("Date") || "";

  const bookData = {
    bookTitle,
    authorName,
    bookPrice,
    bookCategory,
    date,
  };

  bookList.push(bookData);
  localStorage.setItem("bookList", JSON.stringify(bookList));

  event.target.reset();

  console.log(bookList);
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#bookForm").addEventListener("submit", BookFormData);
});

Navbar_Design();
