const LowerCase = () => {
  let array = ["RED", "AND", "WHITE"];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 1) array[i] = array[i].toLowerCase();
  }
  console.log(array);
};

LowerCase();
