var sum = function (a = 0, b = 0, c = 0, d = 0) {
  let result = a + b + d - c;

  console.log(result);
};

const a = Number(process.argv[2]),
  b = Number(process.argv[3]),
  c = Number(process.argv[4]),
  d = Number(process.argv[5]);

sum(a, b, c, d);
