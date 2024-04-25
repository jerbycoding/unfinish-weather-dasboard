const API_KEY = 'f396986e82ca157311f04f633d41f36c';
const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?';
const inputCity = document.getElementById('weatherInput');
const printCountry = document.getElementById('country-name');
const printLongitude = document.getElementById('longitude');
const printLatitude = document.getElementById('latitude');
const heatIndex = document.getElementById('heatIndex');
async function testWeather(){
 
    const api_test = await fetch(API_LINK+`q=${inputCity.value}` + `&appid=${API_KEY}`);
    const data = await api_test.json();
    printCountry.innerText = data.name;
    printLongitude.innerText = "Longtitude:"+ data.coord.lon;
    printLatitude.innerText = "Latitude"+ data.coord.lat;
    heatIndex.innerText = Math.round((data.main.temp - 273.15))  + '*C';
    
  
}
