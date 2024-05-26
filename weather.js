function getWeather() {
    const city = document.getElementById("city-input").value;
    const apiKey = "appid=0b9ff308d482d7681cbf656cfae63e48"; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"0b9ff308d482d7681cbf656cfae63e48"}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].main;
            const tempCelsius = Math.round(data.main.temp - 273.15);
            const minTempCelsius = Math.round(data.main.temp_min - 273.15);
            const maxTempCelsius = Math.round(data.main.temp_max - 273.15);
            const humidity = data.main.humidity;
            const weatherInfo = `現在の天気: ${weather} <br>現在の気温: ${tempCelsius}°C <br>最低気温: ${minTempCelsius}°C <br>最高気温: ${maxTempCelsius}°C <br>湿度: ${humidity}%`;
            document.getElementById("weather-info").innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weather-info").innerHTML = "天気データの取得中にエラーが発生しました。もう一度試してください。";
        });
}


document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("myButton").click();
    }
});

