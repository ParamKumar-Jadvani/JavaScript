var sum = function (one=0, two=0, three=0, four=0, five=0) {
  console.log(one + two + three + four + five);
};

const one = Number(process.argv[2]),
  two = Number(process.argv[3]),
  three = Number(process.argv[4]),
  four = parseInt(process.argv[5]),
  five = parseInt(process.argv[6]);

sum(one, two, three, four, five);
