const loop = (N = 1) => {
  for (let i = 1; i <= N; i++) console.log(i);
};

const loop_1_to_N = () => {
  const n = process.argv[2];

  const result = loop(n);
};

loop_1_to_N();
