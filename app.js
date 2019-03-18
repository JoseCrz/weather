const request = require('request')
const chalk = require('chalk')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


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
        console.log(chalk.bgGreen(`${data.summary}, current temperature: ${data.temperature} ºC`))
    }
})