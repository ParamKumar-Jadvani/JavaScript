import { createProducts } from "../Components/api.js";
import { getElement, getElementQuerySelector } from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/Navbar.js";



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
  const title = getElement("Title").value;
  const price = getElement("Price").value;
  const category = getElement("Category").value;
  const thumbnail = getElement("Image").value;
  const description = getElement("Description").value;

  const Data = {
    title,
    price,
    category,
    thumbnail,
    description,
  };
createProducts(Data);
  form.reset();
};

navbar();
const form = getElementQuerySelector("#form");
form.addEventListener("submit", Product_Form);
