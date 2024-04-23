const giveValue = (id) => {
  return document.getElementById(id).value;
};

const printResult = (result) => {
  document.getElementById("result").innerHTML = result;
};

const getResult = () => {
  const number = Number(giveValue("number"));

  const result = `${number % 3 == 0 ? "YES" : "NO"}`;

  printResult(result);
};
