const sum = (number=1) => {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) sum += i;
  }
  return sum;
};

const sum_of_Even = () => {
  const number = parseInt(process.argv[2]);

  const result = sum(number);
  console.log(result);
};
sum_of_Even();
