const image = document.querySelector("#image");
const myTown = document.querySelector("#town");
const description = document.querySelector("#description");
const currentTemp = document.querySelector("#temperature");
const weatherToday = document.querySelector("#weather-today");
const weatherTomorrow = document.querySelector("#weather-tomorrow");
const weatherOverTomorrow = document.querySelector("#weather-overtomorrow");

const myKey = "d740c3d5cc3a30816f4846c83cec9057"
const lat = "41.065404"
const lon = "111.973628"

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`;
const forecastURL = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiforecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecastResults(data)
                ;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    myTown.innerHTML = "Olancho, Honduras";
    description.innerHTML = data.weather[0].description;
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    image.setAttribute('SRC', iconsrc)
    image.setAttribute('alt', data.weather[0].description)
}

function displayForecastResults(data) {
    let today = data.list[0].weather[0].description;

    let tomorrow = data.list[1].weather[0].description;

    let overTomorrow = data.list[2].weather[0].description;

    weatherToday.innerHTML = ` H: ${Math.round(data.list[0].main.temp_max)}&#176;F, L: ${Math.round(data.list[0].main.temp_min)}&#176;F, ${today}`;
    weatherTomorrow.innerHTML = ` H: ${Math.round(data.list[1].main.temp_max)}&#176;F, L: ${Math.round(data.list[1].main.temp_min)}&#176;F, ${tomorrow}`;
    weatherOverTomorrow.innerHTML = ` H: ${Math.round(data.list[2].main.temp_max)}&#176;F, L: ${Math.round(data.list[2].main.temp_min)}&#176;F, ${overTomorrow}`;
}

apiFetch();
apiforecastFetch();