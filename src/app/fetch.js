export class Fetch {

    async getWeather (inputName) {

        const apikey = process.env.API_KEY;

        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputName}&appid=${apikey}&units=metric&lang=it`)
        
        const data = await res.json();

        console.log(data);

        return data;

    }




}