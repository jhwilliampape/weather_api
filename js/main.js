//Submit
let form = document.querySelector('#SearchForm')
console.log(form)

const app_id = '8d5643e447f99ff73069c1439224bd76'


//Getting data
const getData = async () => {
    let city = document.querySelector("#city").value;
    let zip = document.querySelector("#zip").value;
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${zip}&units=imperial&appid=${app_id}`)
    return response.data
}

//creating const to hold DOM elements
const DOM_ELEMENTS = {
    searchRes:'#searchRes'
}

//Fluxuating scale lists
const fluxList = (forecast, temp, high, low, sunrise, sunset, humidity, pressure, wind, precipitation) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light">${forecast}${temp}${high}${low}${sunrise}${sunset}${humidity}${pressure}${wind}${precipitation}</a>`;
    document.querySelector(DOM_ELEMENTS.searchRes).insertAdjacentHTML('beforeend',html)
}

const loadData = async () => {
    const weatherData = await getData(); //where response.data is returned from getData()
    for (i = 0; i < 1; i++){
        //For each individual data point
        let forecast = weatherData.weather[0].main
        let show_forecast = document.createElement("td")
        console.log(show_forecast)
        show_forecast.innerHTML = forecast
        document.querySelector(`#table-row-${i}`).append(show_forecast)

        let temp = weatherData.main.temp
        let show_temp = document.createElement("td")
        console.log(show_temp)
        show_temp.innerHTML = temp + "℉"
        document.querySelector(`#table-row-${i}`).append(show_temp)
    }

    for (i = 1; i < 2; i++){
        let high = weatherData.main.temp_max
        let show_high = document.createElement("td")
        console.log(show_high)
        show_high.innerHTML = high + "℉"
        document.querySelector(`#table-row-${i}`).append(show_high)

        let low = weatherData.main.temp_min
        let show_low = document.createElement("td")
        console.log(show_low)
        show_low.innerHTML = low + "℉"
        document.querySelector(`#table-row-${i}`).append(show_low)
    }

    for (i = 2; i < 3; i++){
        let humidity = weatherData.main.humidity
        let show_humidity = document.createElement("td")
        console.log(show_humidity)
        show_humidity.innerHTML = humidity + "%"
        document.querySelector(`#table-row-${i}`).append(show_humidity)

        let pressure = weatherData.main.pressure
        let show_pressure = document.createElement("td")
        console.log(show_pressure)
        show_pressure.innerHTML = pressure + "hPa"
        document.querySelector(`#table-row-${i}`).append(show_pressure)
    }
    console.log(weatherData)
}

//Event listener
form.addEventListener('submit', (event) => {
    let city = document.querySelector("#city").value;
    let zip = document.querySelector("#zip").value;
    event.preventDefault()
    return city, zip
})