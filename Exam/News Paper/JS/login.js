const checkUserData = (event) => {
  event.preventDefault();
  const SignUpdata = JSON.parse(localStorage.getItem("userData")) || null;

  const email = document.querySelector("#email").value;
  const psw = document.querySelector("#password").value;

  if (SignUpdata == null) {
    alert("Please Sign up First");
    window.location.href = "signUp.html";
  } else if (SignUpdata.email === email) {
    if (SignUpdata.psw === psw) {
      alert("Login successful");
      window.location.href = "index.html";
    } else {
      alert("Wrong Password");
      window.location.reload();
    }
  } else {
    alert("Wrong Email");
    window.location.reload();
  }
};

document.querySelector("form").addEventListener("submit", checkUserData);
