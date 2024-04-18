function compare(num1, num2=0) {
  if (num1 > num2) return true;
  else return false;
}

let num1 = Number(process.argv[2]),
  num2 = Number(process.argv[3]),
  num3 = parseInt(process.argv[4]);

console.log(compare(num1, num2));

num1 += num3;

console.log(compare(num1, num2));
