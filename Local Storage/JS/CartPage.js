import { createElement, getElement } from "../Components/Helper.js";
import { navbar_Components, navbar_Styles } from "../Components/Navbar.js";

const cartList = JSON.parse(localStorage.getItem("cartList")) || [];
const isLogin = localStorage.getItem("isLogin") || false;
const cartProduct = getElement("cartProduct");
const cartBill = getElement("cartBill");

const navbar = () => {
  const navbar = getElement("navbar");
  navbar.innerHTML = navbar_Components();

  document.addEventListener("DOMContentLoaded", function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = navbar_Styles();
    document.head.appendChild(styleTag);
  });
};

const cartPage_UI = (Data) => {
  cartProduct.innerHTML = "";
  cartBill.innerHTML = "";
  let TotalPrice = 0;

  Data?.map((elem, index) => {
    console.log(elem.qty, elem.image);
    cartList.map((elem) => {
      console.log(elem.qty);
    });

    const DeleteBtn = createElement("button", "Remove", {
      class: "btn btn-danger btn-cartList",
      id: `Delete_${index}`,
    });

    const Btn_Minus = createElement("button", ` - `, {
      class: "btn btn-outline-secondary btn-sm",
    });
    const Btn_Plus = createElement("button", "+", {
      class: "btn btn-outline-secondary btn-sm",
    });

    const elemQty = createElement("span", `${elem?.qty}`, {
      class: "p-2 border-1",
    });

    const img = createElement("img", "", {
      src: elem.image,
      class: "cart-img img-fluid",
    });

    const row = createElement("div", "", { class: "row mb-4" });
    const DeletDiv = createElement("div", ``, { class: "col-md-2 text-end" });
    const QtyDiv = createElement("div", ``, { class: "col-md-2 my-3" });
    const ImgDiv = createElement("div", ``, { class: "col-md-2" });

    DeletDiv.append(DeleteBtn);
    QtyDiv.append(Btn_Minus, elemQty, Btn_Plus);
    ImgDiv.append(img);

    row.append(
      ImgDiv,
      createElement(
        "div",
        `<h6 class="text-muted my-2 mt-3 fw-bold">${
          elem.name
        }</h6><h6 class="text-black mb-0 my-2 fw-bold">Item ${index + 1}</h6>`,
        { class: "col-md-4" }
      ),
      QtyDiv,
      createElement(
        "div",
        `<h6 class="mb-0">Price : <span class="fw-bold">$${
          elem.price * elem.qty
        }</span></h6>`,
        {
          class: "col-md-2",
        }
      ),
      DeletDiv,
      createElement("hr", "", { class: "hr" })
    );

    TotalPrice += Number(elem.price * elem.qty);
    cartProduct.append(row);

    DeleteBtn.addEventListener("click", () => DeleteProduct(index));
    Btn_Plus.addEventListener("click", () => handleQty(index, "+"));
    Btn_Minus.addEventListener("click", () => handleQty(index, "-"));
  });

  cartBill_UI(TotalPrice);
};

const cartBill_UI = (Price) => {
  const card = createElement("div", ``, { class: "card" });
  const cardHead = createElement("div", `<h5 class="mb-0">Bill</h5>`, {
    class: "card-header",
  });

  const cardBody = createElement("div", ``, { class: "card-body" });
  const cardBody_Ul = createElement("ul", ``, {
    class: "list-group list-group-flush",
  });

  cardBody_Ul.append(
    createElement("li", `Subtotal<span>$${Price}</span>`, {
      class:
        "list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0",
    }),
    createElement("li", `Shipping<span>Free</span>`, {
      class:
        "list-group-item d-flex justify-content-between align-items-center px-0",
    }),
    createElement(
      "li",
      `<div><strong>Total</strong></div><span><strong>$${Price}</strong></span>`,
      {
        class:
          "list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3",
      }
    )
  );

  cardBody.append(
    cardBody_Ul,
    createElement("button", "Proceed to Checkout", {
      class: "btn btn-primary btn-lg btn-block btn-cartList",
    })
  );
  card.append(cardHead, cardBody);
  cartBill.append(card);
};

const DeleteProduct = (index) => {
  cartList.splice(index, 1);
  localStorage.setItem("cartList", JSON.stringify(cartList));
  cartPage_UI(cartList);
};

const handleQty = (index, opr) => {
  if (opr == "+") {
    cartList[index].qty += 1;
  } else {
    if (cartList[index].qty == 1) {
      DeleteProduct(index);
    } else {
      cartList[index].qty -= 1;
    }
  }

  cartPage_UI(cartList);
  localStorage.setItem("cartList", JSON.stringify(cartList));
};

const existUser = () => {
  if (isLogin) {
    if (cartList.length === 0) {
      alert("You have to add product first!!");
      window.location.href = "Add_Product.htm";
      return;
    } else UI_Product(cartList);
  } else {
    alert("You have to login first!!");
    window.location.href = "login.html";
  }
};

navbar();
existUser();
