function dice() {
  var dice = document.getElementById("test");
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.textContent = randomNumber;
}
