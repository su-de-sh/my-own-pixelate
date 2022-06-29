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

function colorize(e) {
  color = document.querySelector("select").value;

  if (e.target.nodeName === "TD") {
    e.target.className = color;
  }
  console.dir(e.target);
}

document.querySelector("#add-row").addEventListener("click", makeRow);

document.querySelector("#table").addEventListener("click", colorize);
