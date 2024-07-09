const Product_Id = localStorage.getItem("product_id");

const getData = async (id) => {
  let req = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await req.json();
  console.log(product);
  UI_Product(product);
};

const UI_Product = (product) => {
  document.getElementById("img").src = product.images[0];
  document.getElementById("title").innerHTML = product.title;
  document.getElementById(`price`).innerHTML = product.price;
  document.getElementById("rating").innerHTML = `Rating : ${product.rating}`;
  document.getElementById(`category`).innerHTML = product.category;
  document.getElementById("brand").innerHTML = product.brand;
  document.getElementById(`description`).innerHTML = product.description;
};

getData(Product_Id);
