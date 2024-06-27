const API_Data = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const createElement = (tag, innerHTML = "", attributes = {}) => {
  const element = document.createElement(tag);
  element.innerHTML = innerHTML;
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  return element;
};

const getElementQuerySelector = (selector) => {
  return document.querySelector(selector);
};

const Products = API_Data();
const card_Head = getElementQuerySelector("#card-head");

const UI_Product = (Data) => {
  card_Head.innerHTML = "";
  Data?.map((elem) => {
    const card_body = createElement("div", "", { class: "card-body" });
    const card = createElement("div", "", { class: "card h-100 p-4" });
    const col = createElement("div", "", {
      class: "col rounded-4 columns",
    });
    const buyBtn = createElement("button", "Buy Now", {
      class: "fs-6 fw-bold border-0 buy-now-btn",
    });

    card_body.append(
      createElement("h5", `${elem.title}`, { class: "card-title fw-bold" }),
      createElement(
        "p",
        `Category : <span class="fw-bold">${elem.category}</span>`,
        {
          class: "card-text fw-medium",
        }
      ),
      createElement(
        "p",
        `Price : <span class="fw-bold"> $ ${elem.price}</span>`,
        {
          class: "card-text",
        }
      ),
      buyBtn
    );

    card.append(
      createElement("img", "", {
        class: "card-img-top rounded-3",
        id: "card-img",
        src: `${elem.image}`,
        alt: `${elem.title}`,
        width: "100%",
        height: "100%",
      }),
      card_body
    );
    col.append(card);
    card_Head.append(col);
  });
};

Products.then((data) => {
  UI_Product(data);
});
