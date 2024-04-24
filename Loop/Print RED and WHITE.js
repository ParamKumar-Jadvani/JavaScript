const loop = (N = 1) => {
  for (let i = 1; i <= N; i++) console.log("RED and WHITE");
};

const print_RED_and_WHITE = () => {
  const n = process.argv[2];

  const result = loop(n);
};

print_RED_and_WHITE();
