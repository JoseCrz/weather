const chalk = require('chalk')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


if (process.argv[2]) {
    const location = process.argv[2]

    geocode(location, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(chalk.bgRed(error))
        }
    
        forecast(latitude, longitude, 'si', (error, forecastData) => {
            if (error) {
                return console.log(chalk.bgRed(error))
    
            } else {
                console.log(chalk.bold(location))
                console.log(`${forecastData.summary}, current temperature ${forecastData.temperature}, with a ${forecastData.rainChance}% of raining`)
            }
        })
    })

} else {
    console.log(chalk.bgYellow('Please provide a location.'))
}
