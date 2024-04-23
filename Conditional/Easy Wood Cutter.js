function find_Divisable(number) {
  if (number % 3 == 0) return "Yes";
  else return "No";
}

const N = parseInt(process.argv[2]);

console.log(find_Divisable(N));
