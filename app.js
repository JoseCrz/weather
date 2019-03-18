const chalk = require('chalk')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


if (process.argv[2]) {
    const location = process.argv[2]

    geocode(location, (error, geocodeData) => {
        if (error) {
            return console.log(chalk.bgRed(error))
        }
    
        forecast(geocodeData.latitude, geocodeData.longitude, 'si', (error, forecastData) => {
            if (error) {
                return console.log(chalk.bgRed(error))
    
            } else {
                console.log(chalk.bold(geocodeData.location))
                console.log(`${forecastData.summary}, current temperature ${forecastData.temperature}`)
            }
        })
    })

} else {
    console.log(chalk.bgYellow('Please provide a location.'))
}




