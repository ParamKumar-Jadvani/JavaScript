const form = document.querySelector(".form");
let arr = [];
let valid = new Map();

const data_Handle = () => {
  let data = {
    name: document.querySelector("#name").value,
    number: document.querySelector("#number").value,
    password: document.querySelector("#password").value,
  };
  arr.push(data);
};

const Validation = () => {
  arr.map((elem) => {
    let name = elem.name > 2 ? true : false;
    let number = elem.number.length == 10 ? true : false;
    let password = elem.password.length > 8 ? true : false;
  });
};
