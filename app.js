const request = require('request')
const chalk = require('chalk')

const geocode = require('./utils/geocode')


const forecast = (latitude, longitude, units, callback) => {
    const url = `https://api.darksky.net/forecast/b570cea920d6af533ac24dbe957983e3/${latitude},${longitude}?units=${units}`
    
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Could not connect with the server!', undefined)
        } else if (response.body.error) {
            callback(response.body.error, undefined)
        } else {
            const currentWeather = response.body.currently

            const data = {
                summary: currentWeather.summary,
                temperature: currentWeather.temperature
            }

            callback(undefined, data)
        }
    })
}


geocode('Xalapa', (error, data) => {
    if (error) {
        console.log(chalk.bgRed(error))

    } else {
        console.log(chalk.bgGreen(`Data: ${data.location}. ${data.latitude}, ${data.longitude}`))
    }
})

forecast(19.54, -96.9275, 'si', (error, data) => {
    if (error) {
        console.log(chalk.bgRed(error))
    } else {
        console.log(chalk.bgGreen(`${data.summary}, current temperature: ${data.temperature}c`))
    }
})