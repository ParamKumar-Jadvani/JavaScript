import { createElement, getElement } from "../Components/Helper.js";
import { navbar_Components } from "../Components/Navbar.js";
import { navbar_Styles } from "../Components/Styles.js";

let bookList = JSON.parse(localStorage.getItem("bookList")) || [];
let buyList = JSON.parse(localStorage.getItem("buyList")) || [];
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
  tableBody.innerHTML = "";

  List.map((elem, index) => {
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
      createElement(
        "td",
        `<button class="btn btn-primary"> Buy Book </button>`,
        {
          id: "buy-now",
        }
      ),
      bookmarkedElement
    );

    tableBody.append(tr);

    tr.querySelector("#buy-now").addEventListener("click", () =>
      buyBook(elem, tr, index)
    );

    tr.querySelector("#bookmarked").addEventListener("click", () =>
      bookMarked(elem, tr)
    );
  });
};

const buyBook = (elem, tr, index) => {
  buyList.push(elem);
  bookList.splice(index, 1);
  localStorage.setItem("bookList", JSON.stringify(bookList));
  localStorage.setItem("buyList", JSON.stringify(buyList));
  tr.remove();
  showBookList(bookList);
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
      ? bookList.filter((elem) => elem.bookCategory === category)
      : bookList;
  showBookList(filteredBook);
};

Navbar_Design();
showBookList(bookList);

document.querySelectorAll("#selection div button").forEach((element) => {
  element.addEventListener("click", filterCategory);
});
