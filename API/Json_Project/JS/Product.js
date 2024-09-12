import { getProducts, getUsers, updateUser } from "../Components/api.js";
import {
  checkIsLogin,
  createElement,
  getElement,
  getElementQuerySelector,
  getValue,
} from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/Navbar.js";

let ProductData = [];
let category = [];
let cartList = JSON.parse(localStorage.getItem("cartList")) || [];
const isLogin = JSON.parse(localStorage.getItem("isLogin")) || false;
const card_Head = getElement("card-head");
const filterBtn = getElement("btn-filter");

const navbar = () => {
  const navbar = getElement("navbar");
  navbar.innerHTML = navbar_Components(checkIsLogin("isLogin"));

  document.addEventListener("DOMContentLoaded", function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = navbar_Styles();
    document.head.appendChild(styleTag);
  });

  document.getElementById("loginBtn").addEventListener("click", (event) => {
    console.log();
    if (event.target.innerHTML == "Login") {
      window.location.href = "/API/Json_Project/HTML/Login.html";
    } else if (event.target.innerHTML == "Logout") {
      logout();
    }
  });
};

const getProducts_data = async () => {
  ProductData = await getProducts();
  cartList = await getUsers(isLogin.email);
  cartList = cartList[0];
  category = new Set(ProductData.map((product) => product.category));
  dynamicCategory(category);
  UI_Product(ProductData);
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
        `Price : <span class="fw-bold"> ₹ ${elem.price}</span>`,
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
    buyBtn.addEventListener("click", (event) => {
      event.preventDefault();
      Add_CartList_Product(elem);
    });
  });
};

const existUser = () => {
  if (isLogin) {
    getProducts_data();
  } else {
    alert("You have to login first!!");
    window.location.href = "Login.html";
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
    return ProductData.filter((ele) =>
      ele.title.toLowerCase().includes(value.toLowerCase())
    );
  };
  const searchProducts = handleSearchData(search_Value);

  UI_Product(searchProducts);
};

const Add_CartList_Product = (elem) => {
  const isExists = (id) => {
    const temp = cartList.cart.filter((item) => item.id == id);
    return temp.length > 0;
  };

  if (isExists(elem.id)) {
    cartList.cart?.map((item, index) => {
      if (item.id == elem.id) {
        cartList.cart[index].qty += 1;
        alert("Product added successfully...");
      }
    });
  } else {
    cartList.cart.push({ ...elem, qty: 1 });
    alert("Product added successfully...");
  }

  updateUser(isLogin.id, cartList);
};

const dynamicCategory = (category) => {
  category.forEach((elem) => {
    const form_check = createElement("div", "", { class: "form-check" });
    const input = createElement("input", "", {
      type: "checkbox",
      value: elem,
      name: "category",
      class: `form-check-input`,
    });
    const label = createElement("label", `${elem}`, {
      class: "form-check-label",
      for: `category${elem}`,
    });
    form_check.append(input, label);
    document.getElementById("filterFormCategory").appendChild(form_check);
  });
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
