const find_Minimum = (array) => {
  let result = array[0];

  for (let i = 0; i < array.length; i++) {
    if (result > array[i]) result = array[i];
  }
  return result;
};

const Print = () => {
  let array = [2, 3, 4, 5, 6, 9, 10, 3];

  const result = find_Minimum(array);

  console.log(result);
};

Print();
