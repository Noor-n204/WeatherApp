const city = new CityWeather()
const renderer = new Renderer()

async function displayCitiesWeather(){
    await city.getAllCities()
    const cities = city.data
    renderer.renderAllCities(cities)
}


$("#getCities").on('click',async function(){
    let cityName = $("#cityInput").val()
    await city.getCityData(cityName)
    const cityData = city.data
    renderer.renderCity(cityData)
})

async function addCity(cityName, id){
    await city.getCityData(cityName)
    await city.saveCityData(city.data)
    await city.getAllCities()
    $(`#${id}`).remove()
    renderer.renderAllCities(city.data)
}

async function deleteCity(cityName){
    await city.deleteCity(cityName)
    await city.getAllCities()
    renderer.renderAllCities(city.data)
}

displayCitiesWeather()
