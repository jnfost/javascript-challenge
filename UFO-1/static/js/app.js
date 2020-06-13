// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// function buildTable() {
//     tableData.forEach((ufoSighting) => {
//         var row = tbody.append("tr");
//         Object.values(ufoSighting).forEach((value) => {
//           var cell = row.append("td");
//           cell.text(value);
//         });
//       });   
// }

// buildTable(tableData);
tableData.forEach(function (ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    
    Object.values(ufoSighting).forEach(function(value) {
        console.log(value);
    
        var cell= row.append("td");
        cell.text(value);
    })
});

var button1 = d3.select("#button1");

var form = d3.select("#form");

button1.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputDateTime = d3.select("#inputDateTime");
    var dateValue = inputDateTime.property("value");

    console.log(dateValue);
     
      var filteredData = tableData.filter(sighting => sighting.datetime === dateValue);
    
    console.log(filteredData);
    document.getElementById("body").innerHTML="";
  
    // tableData.push(
    filteredData.forEach(function (ufoSighting) {
                var row = tbody.append("tr");
        
            Object.values(ufoSighting).forEach(function(value) {
        
            var cell= row.append("td");
            cell.text(value);
        })
    });
      
}

var resetButton = d3.select("#resetButton")

resetButton.on("click", buildTable)

function buildTable() {
  d3.event.preventDefault();
  document.getElementById("body").innerHTML="";
  tableData.forEach(function (ufoSight) {
    console.log(ufoSight);
    var row = tbody.append("tr");
    
    Object.values(ufoSight).forEach(function(value) {
        console.log(value);
    
        var cell= row.append("td");
        cell.text(value);
    })
});  
}
