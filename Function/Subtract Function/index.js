const giveValue = (id) => {
  return document.getElementById(id).value;
};

const printResult = (result) => {
  document.getElementById("result").innerHTML = result;
};

const getResult = () => {
  const num1 = giveValue("num1"),
    num2 = giveValue("num2"),
    num3 = giveValue("num3"),
    num4 = giveValue("num4");

  const result = `Subtraction  is :  ${num1 - num2 - num3 - num4}`;

  printResult(result);
};
