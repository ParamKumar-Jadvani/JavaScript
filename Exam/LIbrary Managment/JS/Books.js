import { createElement, getElement } from "../Components/Helper.js";
import { navbar_Components } from "../Components/Navbar.js";
import { navbar_Styles } from "../Components/Styles.js";

let buyList = JSON.parse(localStorage.getItem("buyList")) || [];
let bookmarkedList = JSON.parse(localStorage.getItem("bookmarkedList")) || [];
let bill = 0;

const Navbar_Design = () => {
  const navbar = getElement("navbar");
  navbar.innerHTML = navbar_Components();

  document.addEventListener("DOMContentLoaded", function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `${navbar_Styles()}`;
    document.head.appendChild(styleTag);
  });
};

const checkBookmark = (bookTitle, isBookmarked = false) => {
  bookmarkedList.forEach((book) => {
    if (book.bookTitle === bookTitle) {
      isBookmarked = true;
    }
  });

  if (!isBookmarked) {
    return createElement(
      "td",
      `<button class="btn btn-primary">Bookmark</button>`,
      {
        id: "bookmarked",
      }
    );
  } else {
    return createElement(
      "td",
      `<button class="btn btn-primary disabled">Bookmarked</button>`,
      {
        id: "bookmarked",
      }
    );
  }
};

const showBookList = (List) => {
  const tableBody = getElement("table-body");
  const billElement = getElement("bill");
  tableBody.innerHTML = "";
  billElement.innerHTML = "";

  List.map((elem, index) => {
    bill += parseInt(elem.bookPrice);
    const bookmarkedElement = checkBookmark(elem.bookTitle);

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
      bookmarkedElement
    );

    tableBody.append(tr);
    billElement.innerHTML = `Your Bill : ${bill}`;

    tr.querySelector("#bookmarked").addEventListener("click", () =>
      bookMarked(elem, tr)
    );
  });
};

const bookMarked = (elem, tr) => {
  const td = tr.querySelector("#bookmarked");
  const btn = td.querySelector("button");
  btn.innerHTML = "Bookmarked";
  btn.setAttribute("class", "btn btn-primary disabled");

  bookmarkedList.push(elem);

  localStorage.setItem("bookmarkedList", JSON.stringify(bookmarkedList));
};

const filterCategory = (event) => {
  event.preventDefault();
  const category = event.target.getAttribute("category");
  const filteredBook =
    category !== "All"
      ? buyList.filter((elem) => elem.bookCategory === category)
      : buyList;
  showBookList(filteredBook);
};

Navbar_Design();
showBookList(buyList);
console.log(buyList);

document.querySelectorAll("#selection div button").forEach((element) => {
  element.addEventListener("click", filterCategory);
});
