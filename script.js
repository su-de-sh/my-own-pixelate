// Your code here

function makeRow() {
  //   console.log("im clicked");
  let columnNum = document.querySelector("#input").value;
  //   console.log(columnNum);
  const row = document.createElement("tr");
  for (let i = 0; i < columnNum; i++) {
    const column = document.createElement("td");
    row.appendChild(column);
  }

  const table = document.querySelector("table");

  table.appendChild(row);
}

document.querySelector("#add-row").addEventListener("click", function () {
  makeRow();
});
