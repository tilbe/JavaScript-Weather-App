



const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";




const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var date = await response.json();


    document.querySelector(".city").innerHTML = date.name;
    document.querySelector(".temp").innerHTML = Math.round(date.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = date.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(date.wind.speed) + "km/h";

    console.log(date)

    if (date.weather[0].main == "Clouds") {
        weatherIcon.src = "image/clouds.png"

    } else if (date.weather[0].main == "Clear") {
        weatherIcon.src = "images/clouds.png"


    } else if (date.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }


    else if (date.weather[0].main == "Dirizzle") {
        weatherIcon.src = "images/drizzle.png"
    }


    else if (date.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"

    }

    else if (date.weather[0].main == "wind") {
        weatherIcon.src = "images/wind.png"

    }

}
searchBtn.addEventListener('click', () => {

    checkWeather(searchbox.value)


});

