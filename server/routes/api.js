const express = require('express')
const router = express.Router()
const axios = require('axios')
const CityWeather = require('../model/weather')


const API_KEY = "ab773f0b4794e066f9679d8ca15edbdc"


router.get('/citiesWeather', async function(req,res){
    const cities = await CityWeather.find({})
    res.send([...cities])
})


router.get('/:cityName',async function(req, res){
    const cityName = req.params.cityName
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    const result = await axios.get(WEATHER_URL)
    let cityWeather = new CityWeather({name: result.data.name, temperature : result.data.main.temp, condition : result.data.weather[0].main , conditionPic : result.data.weather[0].icon})
    // cityWeather.save()
    res.send(cityWeather)
})


router.post('/city',async function(req, res){
    const newCity = req.body
    addedCity = new CityWeather(newCity)
    addedCity.save()
    res.end()
})

router.delete('/:cityName',async function(req, res){
    const cityName = req.params.cityName
    const deletedCity = await CityWeather.findOneAndDelete({name: cityName},{new: true})
    res.send(deletedCity)
})




module.exports = router