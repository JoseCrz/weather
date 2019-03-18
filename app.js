const chalk = require('chalk')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


geocode('Xalapa', (error, geocodeData) => {
    if (error) {
        return console.log(chalk.bgRed(error))
    }

    forecast(geocodeData.latitude, geocodeData.longitude, 'si', (error, forecastData) => {
        if (error) {
            return console.log(chalk.bgRed(error))
            
        } else {
            console.log(chalk.bold(geocodeData.location))
            console.log(chalk.gray(`${forecastData.summary}, current temperature ${forecastData.temperature}`))
        }
    })
})
