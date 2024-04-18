function compareTwo_Numbers(num1, num2) {
  if (num1 > num2) console.log(true);
  else console.log(false);

  if (num1 < num2) console.log(true);
  else console.log(false);

  if (num1 == num2) console.log(true);
  else console.log(false);
}

const num1 = process.argv[2],
  num2 = process.argv[3];

compareTwo_Numbers(num1, num2);
