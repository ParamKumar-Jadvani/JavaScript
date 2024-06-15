import { createElement, getElement } from "../Components/Helper.js";
import { navbar_Components } from "../Components/Navbar.js";
import { navbar_Styles } from "../Components/Styles.js";

let bookmarkedList = JSON.parse(localStorage.getItem("bookmarkedList")) || [];

const Navbar_Design = () => {
  const navbar = getElement("navbar");
  navbar.innerHTML = navbar_Components();

  document.addEventListener("DOMContentLoaded", function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `${navbar_Styles()}`;
    document.head.appendChild(styleTag);
  });
};

const showBookList = (List) => {
  const tableBody = getElement("table-body");
  tableBody.innerHTML = "";

  List.map((elem, index) => {
    const tr = createElement("tr");

    tr.append(
      createElement("td", `${index + 1}`),
      createElement("td", `${elem.bookTitle}`),
      createElement("td", `${elem.authorName}`),
      createElement("td", `${elem.bookCategory}`, {
        id: "book-category",
      }),
      createElement("td", `${elem.date}`),
      createElement("td", `${elem.bookPrice}`),
      createElement(
        "td",
        `<button class="btn btn-primary disabled">Bookmarked</button>`,
        {
          id: "bookmarked",
        }
      )
    );

    tableBody.append(tr);
  });
};

const filterCategory = (event) => {
  event.preventDefault();
  const category = event.target.getAttribute("category");
  const filteredBook =
    category !== "All"
      ? bookmarkedList.filter((elem) => elem.bookCategory === category)
      : bookmarkedList;
  showBookList(filteredBook);
};

Navbar_Design();
showBookList(bookmarkedList);

document.querySelectorAll("#selection div button").forEach((element) => {
  element.addEventListener("click", filterCategory);
});
