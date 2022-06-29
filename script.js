// Your code here
let isMouseDown = false;
let columnNum;
function makeRow() {
  //   let columnNum = document.querySelector("#input").value;
  if (document.querySelector("#help")) {
    document.querySelector("#help").remove();
  }

  if (!columnNum) {
    columnNum = prompt("Enter the number of column in canvas!!");
  }
  const row = document.createElement("tr");
  for (let i = 0; i < columnNum; i++) {
    const column = document.createElement("td");
    row.appendChild(column);
  }

  const table = document.querySelector("table");

  table.appendChild(row);
}

function colorize(e) {
  if (e.target.id === "clear-color") {
    Array.from(document.querySelectorAll("td")).forEach((element) => {
      element.className = "";
    });
  }
  color = document.querySelector("select").value;
  if (isMouseDown) {
    if (e.target.nodeName === "TD") {
      if (e.target.className === color) {
        e.target.className = "";
      } else e.target.className = color;
    }
  }
}

document.querySelector("#add-row").addEventListener("click", makeRow);

document.querySelector("#table").addEventListener("mouseover", colorize);
document.querySelector("body").addEventListener("mousedown", function (e) {
  isMouseDown = true;
  colorize(e);
});
document.querySelector("body").addEventListener("mouseup", function () {
  isMouseDown = false;
});

document.querySelector("#clear-color").addEventListener("click", colorize);
