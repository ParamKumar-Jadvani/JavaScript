var cube = function (number) {
  return number * number * number;
};

const num = cube(process.argv[2]);

console.log(num);
console.log(cube(process.argv[2]));
