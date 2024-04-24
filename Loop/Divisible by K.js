const divisible = (num=1, K=1) => {
  for (let i = 1; i <= num; i++) {
    if (i % K == 0) console.log(i);
  }
};

const divisible_by_K = () => {
  const num = process.argv[2],
    K = process.argv[3];

  const result = divisible(num, K);
};

divisible_by_K();
