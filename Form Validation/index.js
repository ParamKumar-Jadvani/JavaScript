const form = document.querySelector(".form");

const userRegex = /^[0-9A-Za-z]{8,100}$/;
// const data_Handle = () => {
//   let name = document.querySelector("#name");
//   let number = document.querySelector("#number");
//   let email = document.querySelector("#email");
//   let psw = document.querySelector("#password");
// };

const Check = (e) => {
  let name = document.querySelector("#name");

  console.log(e.key);

  e.key === "Backspace" || e.key === "Delete"
    ? Validation(name)
    : Validation(name);
};

const Validation = (Tag) => {
  console.log("key press...");
  if (userRegex.test(Tag.value)) {
    Tag.classList.remove("Not-Valid");
    Tag.classList.add("Valid");
    console.log("User Name Passed " + Tag.value);
  } else {
    Tag.classList.remove("Valid");
    Tag.classList.add("Not-Valid");
    console.log("username not Passed " + Tag.value);
  }
};
document.querySelector("#name").addEventListener("keyup", Check);

// console.log(form.querySelector('#name').value);
