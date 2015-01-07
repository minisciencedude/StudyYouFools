//Will be stored in jsm, but needed to test outside of FF.
var sessionStats = new Array();
var cumulativeStats = new Array();

// putStats(): populates statistics tables in statsDisplay.xul
function putStats() {
  //Populating the session statistics table
  var list = document.getElementById("s_statslist");
  var i;

  //If there is no data to display
  if (sessionStats.length == 0) {
    var row = document.createElement("listitem");
    var cell = document.createElement("listcell");

    cell.setAttribute("label", "No data to display!")

    row.appendChild(cell);
    list.appendChild(row);

  }

  //There is data, display it
  else {
    for (i = 0 ; i < sessionStats.length ; i++) {
      var row = document.createElement("listitem");
      var cell = document.createElement("listcell");

      row.appendChild(cell);
      list.appendChild(row);
    }
  }

  //Populating the cumulative statistics table
  var list = document.getElementById("c_statslist");
  var i;

  //If there is no data to display
  if (cumulativeStats.length == 0) {
    var row = document.createElement("listitem");
    var cell = document.createElement("listcell");

    cell.setAttribute("label", "No data to display!")

    row.appendChild(cell);
    list.appendChild(row);

  }

  //There is data, display it
  else {
    for (i = 0 ; i < cumulativeStats.length ; i++) {
      var row = document.createElement("listitem");
      var cell = document.createElement("listcell");

      row.appendChild(cell);
      list.appendChild(row);
    }
  }
}
