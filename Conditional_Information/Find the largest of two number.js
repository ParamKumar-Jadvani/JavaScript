function findLargest(num1, num2) {
  let result;
  if (num1 == num2) result = "Both Numbers are Equal";
  else if (num1 > num2) result = num1 + " is largest";
  else result = num2 + " is largest";

  return result;
}

const num1 = Number(process.argv[2]),
  num2 = Number(process.argv[3]);

console.log(findLargest(num1, num2));
