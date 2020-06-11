// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach(function (ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    
    Object.values(ufoSighting).forEach(function(value) {
        console.log(value);
    
        var cell= tbody.append("td");
        cell.text(value);
    })
});

var button = d3.select("#button");

var form = d3.select("#form")

button.on("click", function() {

    d3.event.preventDefault();
    console.log("You clicked a button");


})
