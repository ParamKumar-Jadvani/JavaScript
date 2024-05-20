let Data = [];

const dataHandle = (e) => {
  e.preventDefault();
  let data_Object = {
    img: document.getElementById("image").value,
    name: document.getElementById("name").value,
    price: Number(document.getElementById("price").value),
  };

  Data.push(data_Object);
  UI_Maker();
};

const UI_Maker = () => {
  document.getElementById("Product").innerHTML = "";
  Data.map((product, index) => {
    let img = document.createElement("img");
    let name = document.createElement("p");
    let price = document.createElement("p");
    let buy = document.createElement("button");
    let del = document.createElement("button");

    img.src = product.img;
    name.innerHTML = product.name;
    price.innerHTML = `$ ${product.price}`;
    buy.innerHTML = `BUY NOW`;
    del.innerHTML = `REMOVE ITEM`;

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "img");
    imgDiv.append(img);

    let btnDiv = document.createElement("div");
    btnDiv.append(buy, del);
    btnDiv.setAttribute("class", "btnDiv");

    let div = document.createElement("div");
    div.append(imgDiv, name, price, btnDiv);
    div.setAttribute("class", "div col-lg-3 col-sm-6");

    document.getElementById("Product").append(div);
    buy.addEventListener("click", buy_Alert);
    del.addEventListener("click", () => Product_Delete(index));
  });
};

const buy_Alert = () => {
  alert("Product is Addedd to your Cart !! ");
};

const Delete_Alert = () => {
  alert("Product is Deleted !! ");
};

const Product_Delete = (index) => {
  Data.splice(index, 1);
  Delete_Alert();
  UI_Maker();
};

document.getElementById("form").addEventListener("submit", dataHandle);
