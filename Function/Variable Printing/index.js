const giveValue = (id) => {
  return document.getElementById(id).value;
};

const printResult = (result, id) => {
  document.getElementById(id).innerHTML = result;
};

const getResult = () => {
  let number = Number(giveValue("number"));

  printResult(number, "result");

  number = Number(giveValue("number2"));

  printResult(number, "result2");
};
