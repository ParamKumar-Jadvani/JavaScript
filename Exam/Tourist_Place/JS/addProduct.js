import { navbar_Components } from "../Components/Navbar.js";
import { getElement, getValue } from "../Components/helper.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Components();

const productForm = getElement("addProduct");
const ProductList = JSON.parse(localStorage.getItem("productList")) || [];
const productData = (event) => {
  event.preventDefault();
  const title = getValue("title");
  const image1 = getValue("img1");
  const image2 = getValue("img2");
  const image3 = getValue("img3");
  const description = getValue("description");
  const price = getValue("price");

  const data = {
    title: title,
    images: [image1, image2, image3],
    description: description,
    id: ProductList.length,
    comment: [],
    like: 0,
    price: price,
  };
  ProductList.push(data);
  localStorage.setItem("productList", JSON.stringify(ProductList));
  productForm.reset();
};

productForm.addEventListener("submit", productData);
