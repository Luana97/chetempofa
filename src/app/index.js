const { Fetch } = require('./fetch');
const { Dom } = require('./dom');
const { geoData } = require('./geoData')
const request = new Fetch();
const dom = new Dom();
const geo = new geoData();

// console.log(process.env.API_KEY);

const search = document.getElementById('searchUser');
const button = document.getElementById('submit');
const button2 = document.getElementById('geo')

search.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        event.preventDefault();
        button.click();
    }
});

button.addEventListener('click', () => {
    const currentVal = search.value;

    request.getWeather(currentVal)
    .then(getUpdate);
})

function getUpdate (data) {
    if (data.cod == 400 || data.cod == 404) {
        document.getElementById('alert').innerHTML = data.message;
        document.getElementById('content').hidden = true;
    } else {
        document.getElementById('content').hidden = false;
        document.getElementById('alert').innerHTML = "";
        dom.updateWeather(data);
    }
};

button2.addEventListener('click', () => {
    getGeolocation()
});

function getGeolocation() {
	let content = document.getElementById("content");
	  
	let apiKey = process.env.API_KEY;
    
	navigator.geolocation.getCurrentPosition(success, error);
    
	function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        let api = "https://api.openweathermap.org/data/2.5/weather";
  
	  let url = api + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=metric&lang=it";
  
	  fetch(url)
		.then(response => response.json())
		.then(data => {
            geo.updateGeoData(data)		  
		});
	}
  
    function error() {
	  location.innerHTML = "Impossibile trovare la tua posizione";
    }
}

require('./index.css')