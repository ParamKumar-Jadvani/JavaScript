const giveValue = (id) => {
  return document.getElementById(id).value;
};

const printResult = (result) => {
  document.getElementById("result").innerHTML = result;
};

const print = () => {
  const name = giveValue("name"),
    age = parseInt(giveValue("age"));

  const result = `Name : ${name} \n Age : ${age}`;

  printResult(result);
};
