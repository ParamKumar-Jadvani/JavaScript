const Variables = {
  Like: parseInt(localStorage.getItem("Like")) || 0,
  Share: parseInt(localStorage.getItem("Share")) || 0,
  Comment: parseInt(localStorage.getItem("Comment")) || 0,
  Subscribe: parseInt(sessionStorage.getItem("Subscribe")) || 0,
};

const Counter_Storage = (event) => {
  const type = event.target.getAttribute("iconName");
  const span = event.target.querySelector("span");
  let iconNum = Variables[type];
  console.log(iconNum, type, Variables[type]);
  iconNum++;
  span.innerHTML = iconNum;

  if (type === "Subscribe") {
    sessionStorage.setItem(type, iconNum);
  } else {
    localStorage.setItem(type, iconNum);
  }

  Variables[type] = iconNum; // Update the Variables object
  console.log(localStorage.getItem(type));
  console.log(sessionStorage.getItem(type));
};

document.querySelector("#Like").addEventListener("click", Counter_Storage);
document.querySelector("#Comment").addEventListener("click", Counter_Storage);
document.querySelector("#Share").addEventListener("click", Counter_Storage);
document.querySelector("#Subscribe").addEventListener("click", Counter_Storage); // Added event listener for Subscribe
