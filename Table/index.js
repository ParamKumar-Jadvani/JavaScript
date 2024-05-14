let array = [];

const dataHandle = (event) => {
  event.preventDefault();

  data = {
    name: document.getElementById("name").value,
    grid: Number(document.getElementById("Grid").value),
    course: document.getElementById("course").value,
  };

  array.push(data);

  UiMaker();
};

const UiMaker = () => {
  document.getElementById("tbody").innerHTML = "";

  array.map((ele, index) => {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.innerHTML = ele.name;
    td2.innerHTML = ele.grid;
    td3.innerHTML = ele.course;
    td4.innerHTML = `<button id="Delete">Delete</button>`;

    let tr = document.createElement("tr");

    tr.append(td1, td2, td3, td4);
    document.getElementById("tbody").append(tr);

    td4.addEventListener("click", () => Delete_Student_Data(index));
  });
};

const Delete_All = () => {
  array = [];
  document.getElementById("tbody").innerHTML = "";
  UiMaker();
};

const Delete_Student_Data = (index) => {
  array.splice(index, 1);
  UiMaker();
};

document.getElementById("btn").addEventListener("click", dataHandle);
document.getElementById("deleteAll").addEventListener("click", Delete_All);
