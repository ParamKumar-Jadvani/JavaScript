import { getElement } from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/Navbar.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Components();

document.addEventListener("DOMContentLoaded", function () {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = navbar_Styles();
  document.head.appendChild(styleTag);
});
