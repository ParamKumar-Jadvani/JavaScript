const Count_Vowel = () => {
    
  let string = "Red and White";
  let result = 0;

  for (let i = 0; i < string.length; i++) {
    if (
      string.charAt(i) == "A" ||
      string.charAt(i) == "E" ||
      string.charAt(i) == "I" ||
      string.charAt(i) == "O" ||
      string.charAt(i) == "U" ||
      string.charAt(i) == "a" ||
      string.charAt(i) == "e" ||
      string.charAt(i) == "i" ||
      string.charAt(i) == "o" ||
      string.charAt(i) == "u"
    )
      result++;
  }
  console.log(result);
};

Count_Vowel();
