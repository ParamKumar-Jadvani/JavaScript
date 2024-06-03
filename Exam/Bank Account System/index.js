let data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
];

const Print_Data = () => {
  data.map((elem) => {
    let title = document.createElement("h4");
    title.innerHTML = `${elem.title} `;

    let img = document.createElement("img");
    img.src = elem.image;

    let price = document.createElement("p");
    price.innerHTML = `$ ${elem.price}`;

    let button = document.createElement("button");
    button.setAttribute("id", "btn");
    button.innerHTML = ` BUY NOW `;

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv");
    imgDiv.append(img);

    let titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "titleDiv");
    titleDiv.append(title, price, button);

    let div = document.createElement("div");
    div.setAttribute("class", "box");
    div.append(imgDiv, titleDiv);

    document.getElementById("products").append(div);
  });
};

class Bank {
  #name;
  #balance;
  #email;
  #number;
  #age;
  constructor(name, email, number, age, balance = 0) {
    this.#name = name;
    this.#balance = balance;
    this.#email = email;
    this.#number = number;
    this.#age = age;
  }

  print() {
    name.innerHTML = `Name : ${this.#name}`;
    email.innerHTML = `Email : ${this.#email}`;
    balance.innerHTML = `Balance : ${this.#balance}`;
    number.innerHTML = `Number : ${this.#number}`;
    age.innerHTML = `Age : ${this.#age}`;
    btn.innerHTML = `Check Balance`;
    btn.setAttribute("id", "checkAmt");
    btn1.innerHTML = `Deposit Amount : ${input}`;
    btn1.setAttribute("id", "dptAmt");
    input.setAttribute("id", "Amtval");

    document
      .querySelector("#account")
      .append(name, age, number, email, balance, btn);
  }

  check_Balance() {
    balance.innerHTML = `Balance : ${this.#balance};`;
  }

  Withdraw(price) {
    flag = this.#balance > price && this.#balance < 0 ? true : false;

    if (flag) {
      this.#balance -= price;
      balance.innerHTML = `Balance : ${this.#balance};`;
    } else {
      alert("You don't have enough balance");
    }

    console.log(flag);
  }
}

const make_Account = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const age = document.getElementById("age").value;

  account = new Bank(name, email, number, age);
  account.print();
  Print_Data();
  form.reset();
};

const checkAge = (e) => {
  e.preventDefault();
  console.log(e);

  const age = document.getElementById("age").value;
  const flag = age > 15 && age < 60 ? true : false;
  if (flag) {
    make_Account();
  } else {
    alert("You are not eligible to open an account");
  }
};

const form = document.querySelector("form");
const name = document.createElement("p");
const email = document.createElement("p");
const balance = document.createElement("p");
const number = document.createElement("p");
const age = document.createElement("p");
const btn = document.createElement("button");
const input = document.createElement("input");
const btn1 = document.createElement("button");

form.addEventListener("submit", checkAge);
