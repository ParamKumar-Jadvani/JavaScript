import {
  createElement,
  getElement,
  getElementQuerySelector,
  getValue,
} from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/Navbar.js";

const ProductData = JSON.parse(localStorage.getItem("productData")) || [];
const isLogin = localStorage.getItem("isLogin") || false;
const card_Head = getElement("card-head");
const filterBtn = getElement("btn-filter");

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
  card_Head.innerHTML = "";
  Data?.map((elem) => {
    const card_body = createElement("div", "", { class: "card-body" });
    const card = createElement("div", "", { class: "card h-100 p-4" });
    const col = createElement("div", "", {
      class: "col rounded-4",
      id: "card",
    });

    card_body.append(
      createElement("h5", `${elem.name}`, { class: "card-title fw-bold" }),
      createElement("p", `${elem.description}`, { class: "card-text" }),
      createElement(
        "p",
        `Category : <span class="fw-bold">${elem.category}</span>`,
        {
          class: "card-text fw-medium",
        }
      ),
      createElement(
        "p",
        `Price : <span class="fw-bold"> ₹ ${elem.price}</span>`,
        {
          class: "card-text",
        }
      )
    );

    card.append(
      createElement("img", "", {
        class: "card-img-top rounded-3",
        id: "card-img",
        src: `${elem.image}`,
        alt: `${elem.name}`,
        width: "100%",
        height: "100%",
      }),
      card_body
    );
    col.append(card);
    card_Head.append(col);
  });
};

const existUser = () => {
  if (isLogin) {
    UI_Product(ProductData);
  } else {
    alert("You have to login first!!");
    window.location.href = "login.html";
  }
};

const applyFilters = (event) => {
  event.preventDefault();

  const selectedCategories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((input) => input.value);

  const selectedPrice = document.querySelector(
    'input[name="price"]:checked'
  )?.value;

  const filteredProducts =
    selectedCategories.length === 0 || selectedCategories.includes("All")
      ? [...ProductData]
      : ProductData.filter((product) =>
          selectedCategories.includes(product.category)
        );

  const sortProducts = (products, sortOrder) => {
    if (sortOrder === "HTL") {
      return products.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "LTH") {
      return products.sort((a, b) => a.price - b.price);
    }
    return products;
  };
  const sortedProducts = sortProducts(filteredProducts, selectedPrice);

  UI_Product(sortedProducts);
};

const SearchInputData = (event) => {
  event.preventDefault();
  const search_Value = getValue("input-search");

  const handleSearchData = (value) => {
    return ProductData.filter((ele) => ele.name.includes(value));
  };
  const searchProducts = handleSearchData(search_Value);

  UI_Product(searchProducts);
};

navbar();
existUser();
filterBtn.addEventListener("click", applyFilters);
document
  .getElementById("input-search")
  .addEventListener("keyup", SearchInputData);
document
  .getElementById("search-btn")
  .addEventListener("click", SearchInputData);
