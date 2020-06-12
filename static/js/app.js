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

button.on("click", runEnter)
form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();
    tbody= tbody;
    var inputDateTime = d3.select("#inputDateTime");
    var dateValue = inputDateTime.property("value");
    var inputState = d3.select("#inputState");
    var stateValue = inputState.property("value");
    var inputCountry = d3.select("#inputCountry");
    var countryValue = inputCountry.property("value");
    var inputShape = d3.select("#inputShape");
    var shapeValue = (inputShape.property("value")).toLowerCase();
    var inputCity = d3.select("#inputCity");
    var cityValue = (inputCity.property("value")).toLowerCase();

    console.log(dateValue);
    console.log(stateValue);
    console.log(countryValue);
    console.log(shapeValue);
    console.log(cityValue);
   
    // var filteredData = tableData.filter(sighting => sighting.datetime === dateValue)
    var filteredData = tableData.filter(sighting => sighting.datetime === dateValue && sighting.state === stateValue && 
        sighting.country === countryValue && sighting.shape === shapeValue && sighting.city === cityValue);
    
    console.log(filteredData);
    document.getElementById("body").innerHTML="";
    tableData.push(filteredData.forEach(function (ufoSighting) {
                var row = tbody.append("tr");
        
        Object.values(ufoSighting).forEach(function(value) {
        
            var cell= tbody.append("td");
            cell.text(value);
        })
    }));
      
}
