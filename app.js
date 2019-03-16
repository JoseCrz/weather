const request = require('request')

const url = 'https://api.darksky.net/forecast/b570cea920d6af533ac24dbe957983e3/37.8267,-122.4233?units=si'

request({url: url, json: true}, (error, response) => {
    const currentWeather = response.body.currently
    //console.log(currentWeather)
    console.log(response.body.daily.data[0].summary)
    console.log(`It is currently ${currentWeather.temperature} degrees outside. There's a ${currentWeather.precipProbability}% chance of rain `)
})