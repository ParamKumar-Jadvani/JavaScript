const checkUserData = (event) => {
  event.preventDefault();

  const SignUpdata = JSON.parse(localStorage.getItem("userData")) || null;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  if (!SignUpdata) {
    alert("Please Sign up First");
    window.location.href = "signUp.html";
    return;
  }

  if (SignUpdata.email === email) {
    if (SignUpdata.psw === password) {
      alert("Login successful");
      window.location.href = "index.html";
    } else {
      alert("Wrong Password");
    }
  } else {
    alert("Wrong Email");
  }

  window.location.reload();
};

document.querySelector("form").addEventListener("submit", checkUserData);
