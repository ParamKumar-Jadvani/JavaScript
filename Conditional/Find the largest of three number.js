function findLargest(num1, num2 = 0, num3 = 0) {
  if (num1 > num2 && num1 > num3) return num1;
  else if (num2 > num3 && num2 > num1) return num2;
  else return num3;
}

const num1 = process.argv[2],
  num2 = process.argv[3],
  num3 = process.argv[4];

console.log("Largest Number is : " + findLargest(num1, num2, num3));
