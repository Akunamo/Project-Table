let table = document.getElementsByClassName("emp-table")[0];
let addEmpButton = document.querySelector('[class="add-emp-btn"]');
let empData = [
  {
    srNo: 1,
    empName: "Aviral Vikram",
    empDepartment: "Frontend",
    isPublish: false,
  },
];

// delete and add all table rows
function refreshtable() {
  let [first, ...rest] = table.children[0].children;
  rest.forEach((tr) => tr.remove());
  empData.forEach((emp, index) => {
    addObjToTable(emp, index);
  });
}

// add emp array object to table

function addObjToTable(emp) {
  let row = table.insertRow(table.children[0].children.length);
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  let cell3 = row.insertCell(3);
  cell0.innerText = emp.srNo;
  cell1.innerText = emp.empName;
  cell2.innerText = emp.empDepartment;

  // Creating Remove and Publish buttons
  let divFlex = document.createElement("div");
  let btnRemove = document.createElement("button");
  let btnPublish = document.createElement("button");
  divFlex.classList.add("flex-column")
  btnRemove.classList.add("btn-remove");
  btnPublish.classList.add("btn-publish");
  btnRemove.innerText = "Remove";
  btnPublish.innerText = "Publish";
  // btnRemove.setAttribute('onclick' )   Trying to run function onclick, now using event delegation
  // btnRemove.onclick() = removeEmp();
  cell3.appendChild(divFlex);
  divFlex.appendChild(btnRemove);
  divFlex.appendChild(btnPublish);
}

refreshtable();
// Add Input data to Array as Object
addEmpButton.addEventListener("click", addEmpObj);
function addEmpObj() {
  let name = document.getElementById("empname").value;
  let dep = document.getElementById("empdepartment").value;
  let newEmp = {};
  newEmp.srNo = empData.length + 1;
  newEmp.empName = name;
  newEmp.empDepartment = dep;
  newEmp.isPublish = false;
  empData.push(newEmp);
  addObjToTable(newEmp); // append the newly added emp to table
}


// Trash code ------------------ with problems

// function removeEmp() {
//   let removeButtons = [...document.getElementsByClassName("btn-remove")]; converting HTMLCollection to array using spread
//   removeButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {     // Event delegation is needed to attach f()
//       btn.parentElement.parentElement.remove();
//       let objToDelete = btn.parentElement.parentElement.children[0].innerText;

//       empData.splice(objToDelete - 1, 1);

//       empData.map((emp, index) => {
//         console.log(index);
//       });
//       console.log(empData.splice(objToDelete - 1, 1));
//       // console.log(btn.parentElement.parentElement.children[0]);
//     });
//   });
// }




// --------------------------------------
// ----- Using Event Delegation ---------
// --------------------------------------

table.addEventListener("click", (item) => {
  btn = item.target
  let currentRow = btn.parentElement.parentElement.parentElement;
  let itemSrNo = currentRow.children[0].innerText;
  // better way to find the index of the object instead of guessing
  let objectIndex = empData.findIndex((e) => e.srNo == itemSrNo);

  // console.log(empData[objectIndex].isPublish, "ispp");
  //removing that object from array as well as from table
  if (btn.className === "btn-remove") {
    empData.splice(objectIndex, 1);
    currentRow.remove();
  }

  if (btn.className === "btn-publish") {
    if(empData[objectIndex].isPublish === false){
      btn.style.backgroundColor = "limegreen";
      btn.innerText = "UnPublish"
      empData[objectIndex].isPublish = true;
      console.log(empData[objectIndex].isPublish)
    }
    else {
      btn.style.backgroundColor = "orangered";
      btn.innerText = "Publish"
      empData[objectIndex].isPublish = false;
      console.log(empData[objectIndex].isPublish)

    }
  }

});
