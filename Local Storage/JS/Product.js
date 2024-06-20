import { createElement, getElement } from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/Navbar.js";

const ProductData = JSON.parse(localStorage.getItem("productData")) || [];

const navbar = () => {
  const navbar = getElement("navbar");
  navbar.innerHTML = navbar_Components();

  document.addEventListener("DOMContentLoaded", function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = navbar_Styles();
    document.head.appendChild(styleTag);
  });
};

const UI_Product = (Data) => {
  Data?.map((elem) => {
    const card_body = createElement("div", "", { class: "card-body" });
    const card = createElement("div", "", { class: "card h-100 p-4" });
    const col = createElement("div", "", {
      class: "col rounded-4",
      id: "card",
    });

    card_body.append(
      createElement("h5", `${elem.name}`, { class: "card-title" }),
      createElement("p", `${elem.description}`, { class: "card-text" }),
      createElement("p", `Category : ${elem.category}`, {
        class: "card-text fw-medium",
      }),
      createElement("p", `Price : ${elem.price}`, {
        class: "card-text fw-bolder",
      })
    );

    card.append(
      createElement("img", "", {
        class: "card-img-top rounded-3",
        src: `${elem.image}`,
        alt: `${elem.name}`,
        width: "100%",
        height: "100%",
      }),
      card_body
    );
    col.append(card);
    document.getElementById("card-head").append(col);
  });
};

navbar();
UI_Product(ProductData);
