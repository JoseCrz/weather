const request = require('request')
const chalk = require('chalk')

const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/b570cea920d6af533ac24dbe957983e3/37.8267,-122.4233?units=si'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log(chalk.bgRed('Could not connect with the server'))

//     } else if (response.body.error) {
//         console.log(chalk.bgYellow(response.body.error))
        
//     } else {
//         const currentWeather = response.body.currently
//         //console.log(currentWeather)
//         console.log(response.body.daily.data[0].summary)
//         console.log(`It is currently ${currentWeather.temperature} degrees outside. There's a ${currentWeather.precipProbability}% chance of rain `)
//     }

// })


geocode('Xalapa', (error, data) => {
    if (error) {
        console.log(chalk.bgRed(error))

    } else {
        console.log(chalk.bgGreen(`Data: ${data.location}. ${data.latitude}, ${data.longitude}`))
    }
})