let count = 0;

const getData = () => {
  count++;
  let box1 = document.getElementById("box-1").innerHTML;
  let box2 = document.getElementById("box-2").innerHTML;
  let box3 = document.getElementById("box-3").innerHTML;
  let box4 = document.getElementById("box-4").innerHTML;

  if (count == 1) Counter_Js(box1, box2, box3, box4);
};

const Counter_Js = (b1, b2, b3, b4) => {
  let counter = 0;
  let max = b1 > b2 ? b1 : b2 > b3 ? b2 : b3 > b4 ? b3 : b4;
  let arr = [0, 0, 0, 0];

  document.getElementById("box-1").innerHTML = arr[0];
  document.getElementById("box-2").innerHTML = arr[1];
  document.getElementById("box-3").innerHTML = arr[2];
  document.getElementById("box-4").innerHTML = arr[3];

  const Time = setInterval(() => {
    counter++;

    document.getElementById("box-1").innerHTML = arr[0]++;

    if (counter > 1) document.getElementById("box-2").innerHTML = arr[1]++;

    if (counter > 2) document.getElementById("box-3").innerHTML = arr[2]++;

    if (counter > 3) document.getElementById("box-4").innerHTML = arr[3]++;

    console.log(arr[3], counter, max);

    if (counter <= max + 3) clearInterval(Time);
  }, 1000);
};

document.getElementById("btn").addEventListener("click", getData);
