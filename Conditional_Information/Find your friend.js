var result = function (num) {
  let ans;

  if (num < 13) ans = "1 Kms";
  else if (num >= 13 && num < 18) ans = "5 Kms";
  else if (num >= 18 && num < 30) ans = "10 Kms";
  else ans = "You can have have friend from anywhere";

  return ans;
};

function friendshipRange() {
  const ageInput = document.getElementById("ageInput");
  const age = parseInt(ageInput.value);
  
  document.getElementById("result").innerText = result(age);
}

const N = parseInt(process.argv[2]);

console.log(result(N));

