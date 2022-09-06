let table = document.getElementsByClassName("emp-table")[0];
let empData = [
  {
    srNo: 01,
    empName: "Aviral Vikram",
    empDepartment: "Frontend",
  },
];

// console.log(table);

const updateTable = () => {
  empData.forEach((emp, index) => {
    if (table.children[0].children.length !== index + 1) return;
    console.log(index);
    let row = table.insertRow(index + 1);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    cell0.innerText = emp.srNo;
    cell1.innerText = emp.empName;
    cell2.innerText = emp.empDepartment;
  });
};
setInterval(() => {
  updateTable();
  // console.log(table.children[0].children.length);
}, 2000);

function addEmp() {
  let name = document.getElementById("empname").value;
  let dep = document.getElementById("empdepartment").value;
  let newEmp = {};
  newEmp.srNo = empData.length + 1;
  newEmp.empName = name;
  newEmp.empDepartment = dep;
  empData.push(newEmp);
  updateTable();
}
