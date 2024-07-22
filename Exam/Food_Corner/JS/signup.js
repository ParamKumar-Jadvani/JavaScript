import { post } from "../Components/api.js";
import { getElement } from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/navbar.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Components();

document.addEventListener("DOMContentLoaded", function () {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = navbar_Styles();
  document.head.appendChild(styleTag);

  (() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const getCityName = async (lat, lng) => {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
        );
        const data = await response.json();
        return await data.address.city;
      };
      (async () => {
        let city = await getCityName(latitude, longitude);
        "સુરત" === city ? (city = "Surat") : city;
        document.getElementById("city").value = city;
        document.getElementById("city").setAttribute("disabled", true);
      })();
    });
  })();
});

document.getElementById("signup").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const city = document.getElementById("city").value;

  const user = {
    name,
    email,
    password,
    phone,
    city,
  };
  post(user);
});
