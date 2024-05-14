let array = [];
let salary_Sum = 0;
let prev_Salary = 0;

const dataHandle = (event) => {
    event.preventDefault();

    data = {
        name: document.getElementById("name").value,
        job_role: document.getElementById("job-role").value,
        department: document.getElementById("department").value,
        salary: Number(document.getElementById("salary").value),
        exp: Number(document.getElementById("exp").value),
        email: document.getElementById("email").value
    }
    console.log(data);

    salary_Sum += data.salary;
    console.log(salary_Sum);

    array.push(data);

    UiMaker();
}


const UiMaker = () => {
    document.getElementById('tbody').innerHTML = "";
    document.getElementById('sum').innerHTML = "";
    document.getElementById('count').innerHTML = ""


    array.map((ele, index) => {

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");

        td1.innerHTML = ele.name;
        td2.innerHTML = ele.job_role;
        td3.innerHTML = ele.department;
        td4.innerHTML = ele.salary;
        td5.innerHTML = ele.email;
        td6.innerHTML = ele.exp;
        td7.innerHTML = (ele.exp > 6) ? `Senior` : `Junior`;
        td8.innerHTML = `<button id="Delete">Delete</button>`

        let tr = document.createElement("tr");

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        document.getElementById("tbody").append(tr);

        td8.addEventListener("click", () => fire_Employee(index, ele.salary))
    })

    document.getElementById("sum").innerHTML = `Total Salary : ${salary_Sum}`;
    document.getElementById("count").innerHTML = `Total Hired Employee : ${array.length}`;
}

const fire_All = () => {
    array = [];
    document.getElementById("tbody").innerHTML = "";
    salary_Sum=0;
    UiMaker();
}

const fire_Employee = (index, salary) => {
    array.splice(index, 1);
    salary_Sum -= salary;
    UiMaker();
}

document.getElementById('btn').addEventListener("click", dataHandle);
document.getElementById('Fire').addEventListener("click", fire_All);