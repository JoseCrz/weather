const request = require('request')
const chalk = require('chalk')

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


const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYnlrbzAxMyIsImEiOiJjanRhdnJxOWUwM2l6NDRxamN1cDJqdmQ1In0.OKOEbro8Zm1ZQjfLJo_kLw`
    
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Could not connect with the server!', undefined)

        } else if (response.body.message) {
            callback(response.body.message, undefined)

        } else if (response.body.features.length === 0) {
            callback('Unable to find location', undefined)

        } else {
            const place = response.body.features[0]
            const data = {
                location: place.place_name,
                latitude: place.center[1],
                longitude: place.center[0]
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