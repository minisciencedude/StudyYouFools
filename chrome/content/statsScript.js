Components.utils.import("resource://modules/sessionStats.jsm");

function putStats() {
  var list = document.getElementById("s_statslist");

  var row = document.createElement("listitem");
  var cell = document.createElement("listcell");
  alert("This works.");
  alert(sessionStats.length);

  row.appendChild(cell);
  list.appendChild(row);

  list = document.getElementById("c_statslist");

  row = document.createElement("listitem");
  cell = document.createElement("listcell");
  cell.setAttribute("label", "No data");

  row.appendChild(cell);
  list.appendChild(row);
}
