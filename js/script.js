var countryHolder = document.getElementById('country'),
    cityHolder = document.getElementById('city');
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "http://www.json-generator.com/api/json/get/bHHiszROHm?indent=2", false );
xmlHttp.send( null );
var data = JSON.parse(xmlHttp.responseText);



var countyValue = data.country;
var cityValue = data.city;



countryHolder.innerHTML = countyValue;
cityHolder.innerHTML = cityValue;
