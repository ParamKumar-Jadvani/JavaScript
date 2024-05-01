const Character_at_Odd_Position = () => {
  let string = "White";

  for (let i = 0; i < string.length; i++) {
    if (i % 2 == 1) console.log(string.charAt(i));
  }
};

Character_at_Odd_Position();
