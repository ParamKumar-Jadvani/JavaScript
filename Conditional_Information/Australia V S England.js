function find_Result(A, E) {
  let result;

  if (A == E) result = "Tie";
  else if (A > E) result = "Australia";
  else result = "England";

  return result;
}

const Australia = process.argv[2],
  England = process.argv[3];

console.log(find_Result(Australia, England));