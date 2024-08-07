import { createElement, getValue } from "../Components/Helper.js";

let data = [];

const API = async () => {
  let request = await fetch("https://dummyjson.com/products");
  let response = await request.json();
  console.log(response.products);
  UI_Product(response.products);
};

const card_Head = document.getElementById("card-head");
const UI_Product = (Data) => {
  card_Head.innerHTML = "";
  Data?.map((elem) => {
    const card_body = createElement("div", "", { class: "card-body" });
    const card = createElement("div", "", { class: "card h-100 p-4" });
    const col = createElement("div", "", {
      class: "col rounded-4",
      id: "card",
    });
    const buyBtn = createElement("button", "Buy Now", {
      class: "fs-6 fw-bold border-0 buy-now-btn",
    });

    card_body.append(
      createElement("h5", `${elem.title}`, { class: "card-title fw-bold" }),
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
        `Price : <span class="fw-bold"> $ ${elem.price}</span>`,
        {
          class: "card-text",
        }
      ),
      buyBtn
    );

    card.append(
      createElement("img", "", {
        class: "card-img-top rounded-3",
        id: "card-img",
        src: `${elem.thumbnail}`,
        alt: `${elem.title}`,
        width: "100%",
        height: "100%",
      }),
      card_body
    );
    col.append(card);
    card_Head.append(col);
    data.push(elem);
    buyBtn.addEventListener("click", () => {
      localStorage.setItem("product_id", JSON.stringify(elem.id));
      window.location.href = "/Exam/API/HTML/detailPage.html";
    });
  });
};

const applyFilters = (event) => {
  event.preventDefault();

  console.log(data);

  const selectedCategories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((input) => input.value);

  const selectedPrice = document.querySelector(
    'input[name="price"]:checked'
  )?.value;

  const filteredProducts =
    selectedCategories.length === 0 || selectedCategories.includes("All")
      ? [...data]
      : data.filter((product) => selectedCategories.includes(product.category));

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
    return data.filter((ele) => ele.title.includes(value));
  };
  const searchProducts = handleSearchData(search_Value);

  UI_Product(searchProducts);
};

API();
document.getElementById("btn-filter").addEventListener("click", applyFilters);
document
  .getElementById("input-search")
  .addEventListener("keyup", SearchInputData);
document
  .getElementById("search-btn")
  .addEventListener("click", SearchInputData);
