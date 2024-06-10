let Data = [];
const form = document.querySelector(".form");
const input = form.querySelectorAll("input");
const regexMap = {
  username: /^(?!\s)[a-zA-Z0-9 ]+(?<!\s)$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

const Validation = (Tag) => {
  console.log(Tag);
  const inputType = Tag.getAttribute("validation-type");
  const Regex = regexMap[inputType];

  if (Regex.test(Tag.value)) {
    Tag.style.border = "2px solid blue";
  } else {
    Tag.style.border = "2px solid red";
  }
};

input.forEach((inputTag) => {
  inputTag.addEventListener("keyup", (event) => Validation(event.target));

  inputTag.addEventListener("focus", (event) => Validation(event.target));

  inputTag.addEventListener(
    "blur",
    (event) => (event.target.style.border = "")
  );
});

const dataHandle = (e) => {
  e.preventDefault();
  Object = {
    username: form.querySelector("#name").value,
    email: form.querySelector("#email").value,
    number: form.querySelector("#number").value,
  };
  Data.push(dataHandle);
  UI_Maker();
};

const UI_Maker = () => {};

form.addEventListener("submit", () => dataHandle);
