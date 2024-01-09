const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cityWeatherSchema = new Schema({
    name : String,
    temperature : Number,
    condition : String,
    conditionPic : String
})

const CityWeather = mongoose.model("cityWeather", cityWeatherSchema)
module.exports = CityWeather