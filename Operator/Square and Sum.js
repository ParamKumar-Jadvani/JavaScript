var square = function (number) {
  return number * number;
};

var sum = function (one, two, three) {
  console.log(one + two + three);
};

const one = square(Number(process.argv[2])),
  two = square(Number(process.argv[3])),
  three = square(Number(process.argv[4]));

sum(one, two, three);
