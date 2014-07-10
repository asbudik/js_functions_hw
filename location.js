
                  //Math.abs

var myResults = [{name: "six pack of beer", location: {lat: 37.767182, long: -122.5}}, 
                {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
                {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
                {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
                {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
                {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]

var curLocation = {lat:32.102, long: 120.732};


var calcDistance = function(location1, location2) {
  var distance = (Math.abs(location1["lat"] - location2["lat"])) + (Math.abs(location1["long"] - location2["long"]));

  return distance
}

for (i = 0; i < myResults.length; i++) {
  myResults[i]["distance"] = calcDistance(myResults[i]["location"], curLocation);
}

var sortArray = function(array) {
  
  results = [];

  while (myResults.length > 0) {

    var minIndex = 0;
    for (i = 0; i < myResults.length; i++) {

      if (myResults[minIndex]["distance"] > myResults[i]["distance"]) {
        minIndex = i;
      }
    }
    results.push(myResults[minIndex]);
    myResults.splice(minIndex, 1);
  }
  return results;
}

console.log(sortArray(myResults));