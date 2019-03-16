const request = require('request')
const chalk = require('chalk')

const url = 'https://api.darksky.net/forecast/b570cea920d6af533ac24dbe957983e3/37.8267,-122.4233?units=si'

request({url: url, json: true}, (error, response) => {
    const currentWeather = response.body.currently
    //console.log(currentWeather)
    console.log(response.body.daily.data[0].summary)
    console.log(`It is currently ${currentWeather.temperature} degrees outside. There's a ${currentWeather.precipProbability}% chance of rain `)
})

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnlrbzAxMyIsImEiOiJjanRhdnJxOWUwM2l6NDRxamN1cDJqdmQ1In0.OKOEbro8Zm1ZQjfLJo_kLw'
request({url: url2, json: true}, (error, response) => {
    //console.log(response.body)
    const place = response.body.features[0]
    const name = place.text
    const latitude = place.center[1]
    const longitude = place.center[0]
    //console.log(place)
    console.log(name)
    console.log(`Latitude = ${latitude}, Longitude = ${longitude}`)
})