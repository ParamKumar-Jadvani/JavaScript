const print = (min = 0, max = 1) => {
  for (let i = min; i < max; i++) console.log(i);
};

const from_min_to_max = () => {
  const min = process.argv[2],
    max = process.argv[3];

  const result = print(min, max);
};

from_min_to_max();
