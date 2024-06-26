import { navbar_Components } from "../Components/Navbar.js";
import { createElement, getElement } from "../Components/helper.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Components();

const ProductList = JSON.parse(localStorage.getItem("productList")) || [];
const index = localStorage.getItem("clickProduct");

const data = ProductList[index];
const product = getElement("product");

const UI_view = () => {
  product.innerHTML = "";
  const slider = createElement(
    "span",
    `<div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${data.images[0]}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${data.images[1]}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${data.images[2]}" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`,
    {}
  );

  const form = createElement(
    "form",
    `<input type="text" class="w-75" id="comment">
      <input type="submit" class="w-25" >`,
    {
      class: "d-flex justify-content-between align-item-center",
      id: "commentForm",
    }
  );

  const comment = createElement("div", "", { id: "comments" });

  product.append(
    createElement("h4", `Welcome To Tourist`, { class: "ms-5" }),
    slider,
    createElement("h4", `${data.title}`, { class: "ms-5" }),
    createElement("p", `${data.description}`, { class: "ms-5" }),
    createElement("p", `Price : <span class="fw-bold">${data.price}</span>`, {
      class: "ms-5",
    }),
    createElement(
      "button",
      `Like : <span class="fw-bold">${data.like}</span>`,
      { class: "btn ms-5 btn-danger" }
    ),
    createElement("hr", ``, { class: "hr" }),
    createElement("h5", "comments", {}),
    comment,
    form
  );

  form.addEventListener("submit", add_Comment, false);
  print_Comment();
};

const print_Comment = () => {
  const commentDiv = document.getElementById("comments");
  commentDiv.innerHTML = "";
  const comments = data.comment || [];
  comments.map((elem) => {
    const p = createElement("p", elem);
    commentDiv.append(p);
  });
};

const add_Comment = (event) => {
  event.preventDefault();
  const comment = document.querySelector("#comment").value;
  data.comment.push(comment);
  ProductList[index] = data;
  print_Comment();
  document.querySelector("#commentForm").reset();
  localStorage.setItem("productList", JSON.stringify(ProductList));
};

UI_view();
