const giveValue = (id) => {
  return document.getElementById(id).value;
};

const printResult = (result) => {
  document.getElementById("result").innerHTML = result;
};

const sum = () => {
  const num1 = parseInt(giveValue("num1")),
    num2 = parseInt(giveValue("num2")),
    num3 = parseInt(giveValue("num3"));

  const result = `Sum is :  ${num1 + num2 + num3}`;

  printResult(result);
};
