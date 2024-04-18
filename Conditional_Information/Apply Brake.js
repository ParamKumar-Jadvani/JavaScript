function find_Speed(distance = 1, time = 1) {
  let result,
    speed = distance / time;

  if (speed > 40) result = "Apply Brake";
  else result = "Keep Going";

  return result;
}

let distance = process.argv[2],
  time = process.argv[3];

console.log(find_Speed(distance, time));
