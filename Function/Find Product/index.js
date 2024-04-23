const giveNumber = (id) => {
  return parseInt(document.getElementById(id).value);
};

const printResult = (result) => {
  document.getElementById("result").innerHTML = result;
};

const getResult = () => {
  const num1 = giveNumber("num1"),
    num2 = giveNumber("num2"),
    num3 = giveNumber("num3"),
    num4 = giveNumber("num4"),
    num5 = giveNumber("num5");

  const result = `Final Product is :  ${num1 * num2 * num3 * num4 * num5}`;

  printResult(result);
};
