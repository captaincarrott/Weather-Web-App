let ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let ApiKey = "bc72220c721f07377fde6a7c467c95bb";

let SearchBox = document.querySelector(".search-box");
let SearchBtn = document.querySelector(".search-btn");

async function CheckWeather(city) {
    
    const response = await fetch(`${ApiUrl}${city}&appid=${ApiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".temprature").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".country-name").innerHTML = data.name;
    document.querySelector(".Humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".Wind-Speed").innerHTML = `${data.wind.speed}km/h`;

    if (data.weather[0].main.toLowerCase() == "clear") {
        document.querySelector(".status-img").src = "images/clear.png";
    }else if (data.weather[0].main.toLowerCase() == "clouds") {
        document.querySelector(".status-img").src = "images/clouds.png";
    }else if (data.weather[0].main.toLowerCase() == "drizzle") {
        document.querySelector(".status-img").src = "images/drizzle.png";
    }else if (data.weather[0].main.toLowerCase() == "mist") {
        document.querySelector(".status-img").src = "images/mist.png";
    }else if (data.weather[0].main.toLowerCase() == "rain") {
        document.querySelector(".status-img").src = "images/rain.png";
    }else if (data.weather[0].main.toLowerCase() == "snow") {
        document.querySelector(".status-img").src = "images/snow.png";
    }else if (data.weather[0].main.toLowerCase() == "wind") {
        document.querySelector(".status-img").src = "images/wind.png";
    }

        document.querySelectorAll(".hide").forEach(el => {
            el.classList.toggle("hide")
        });

}
SearchBtn.addEventListener("click", () => {
    CheckWeather(SearchBox.value.trim());
})
