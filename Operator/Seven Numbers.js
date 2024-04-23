var product = function (a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0) {
  return (a + b + c) * (d + e + f + g);
};

const a = Number(process.argv[2]),
  b = Number(process.argv[3]),
  c = Number(process.argv[4]),
  d = parseInt(process.argv[5]),
  e = parseInt(process.argv[6]),
  f = parseInt(process.argv[7]),
  g = parseInt(process.argv[8]);

let ans = product(a, b, c, d, e, f, g);

console.log(ans);
