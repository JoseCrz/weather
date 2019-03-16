const request = require('request')

const url = 'https://api.darksky.net/forecast/b570cea920d6af533ac24dbe957983e3/37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})