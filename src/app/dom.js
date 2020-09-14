export class Dom {

    constructor () {
        this.domContainer = document.getElementById('content');
        this.city;
    }

    updateWeather (data) {

        this.domContainer.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h3 style="text-align: center;" id="location" class="card-title">${data.name}, ${data.sys.country}</h3>
                    <p style="text-align: center;" id="desc" class="card-text">${data.weather[0].description}<p>
                    <img style="float: right; width: 80px" id="image" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                    <p style="font-size: 30px;" id="temp" class="card-subtitle mb-2">Temp: ${Math.floor(data.main.temp)} °C</p>
                    <p id="humidity" class="card-subtitle mb-2">Umidità: ${data.main.humidity}%</p>
                    <p id="wind" class="card-subtitle mb-2">Vento: ${data.wind.speed} m/s</p>
                </div>
            </div>        
        `
    }
}