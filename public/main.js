const api = {
    key:"9fe19e57a1050d534732c22d335ca68a",
    baseurl:"https://openweathermap.org/current"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt) {
    if(evt.keyCode ==13) {
        getResults(searchbox.value);
        
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
    return weather.json();
}).then(displayResults);
}

function displayResults(weather) {
    
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date =document.querySelector('.location .date');
    date.innerText = dateBilder(now);

    let temperature = document.querySelector('.current .temperature');
    temperature.innerHTML = `${Math.round(weather.main.temperature)}<span>°C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°C /${weather.main.temp_max}°C`;
}

function dataBuilder(d) {
    let months = ["January","February","March","April","May","June","July","August","Sepetember","October","November","December"]
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day = day[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

