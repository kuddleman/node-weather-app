const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=f25c9e4c1074ee45588aa6873d401edb&query=Phoenix'

//json: true is an option of the request package that
//automatically parses the JSON data.  With this 'json' option,
// we don't have to use the standard JSON.parse

request({ url: url, json: true }, (error, response)=>{
 //console.log(response.body.current)
  const weatherStats = response.body.current  

  const currentTemp = weatherStats.temperature

  const tempInFahrenheit = Math.floor((currentTemp * 9/5) + 32)

  const description = weatherStats.weather_descriptions[0]

  console.log(`It is currently ${tempInFahrenheit} degrees out.  The weather is ${description}.`)
  
})