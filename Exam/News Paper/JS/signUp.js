const userData = (event) => {
  event.preventDefault();
  const name = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const psw = document.querySelector("#password").value;
  const country = document.querySelector("#Country").value;

  const data = {
    name,
    email,
    psw,
    country,
  };

  console.log(data);
  localStorage.setItem("userData", JSON.stringify(data));
  window.location.href = "login.html";
};

document.querySelector("form").addEventListener("submit", userData);
