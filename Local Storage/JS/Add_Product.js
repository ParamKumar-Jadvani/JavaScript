import { getElement, getElementQuerySelector } from "../Components/Helper.js";
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

const Product_Form = (event) => {
  event.preventDefault();
  const name = getElement("Title").value;
  const price = getElement("Price").value;
  const category = getElement("Category").value;
  const image = getElement("Image").value;
  const description = getElement("Description").value;

  const Data = {
    name,
    price,
    category,
    image,
    description,
    id:
      ProductData.length === 0 ? 1 : ProductData[ProductData.length - 1].id + 1,
  };

  ProductData.push(Data);
  localStorage.setItem("productData", JSON.stringify(ProductData));
  form.reset();
};

navbar();
const form = getElementQuerySelector("#form");
form.addEventListener("submit", Product_Form);
