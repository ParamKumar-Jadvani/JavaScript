var sum = function (a, b) {
  return a + b;
};

var ans = function (a, b, c) {
  let ans = sum(a, b);
  ans %= c;
  console.log(ans);
};

const a = Number(process.argv[2]),
  b = Number(process.argv[3]),
  c = Number(process.argv[4]);

ans(a, b, c);
