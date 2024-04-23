const giveValue = (id) => {
    return document.getElementById(id).value;
  };
  
  const printResult = (result) => {
    document.getElementById("result").innerHTML = result;
  };

  const getResult = ()=>{
    const number = Number(giveValue("number"));

    const result = `This Number is :  ${(number%2==0) ? "Even Number" : "Odd Number"}`

    printResult(result);
  }