const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=f25c9e4c1074ee45588aa6873d401edb&query=Phoenix'

//json: true is an option of the request package that
//automatically parses the JSON data.  With this 'json' option,
// we don't have to use the standard JSON.parse

request({ url: url, json: true }, (error, response)=>{
 //console.log(response.body.current)

 if ( error ) {
   console.log( 'Unable to connect to weather service' )
 } else if ( response.body.error ) {
   console.log('Unable to find location')
 } else {
    const weatherStats = response.body.current  

    const currentTemp = weatherStats.temperature

    const tempInFahrenheit = Math.floor((currentTemp * 9/5) + 32)

    const description = weatherStats.weather_descriptions[0]

    console.log(`It is currently ${tempInFahrenheit} degrees out.  The weather is ${description}.`)
 }
})

const newUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3VkZGxlbWFuIiwiYSI6ImNrYTlxc25wNzB2aW4ycnF2NzFsZTczbGoifQ.mTXXKWMZrl8_jVajXyEkCQ&limit=1'

request({ url: newUrl, json: true }, (error, response) => {
  //console.log(response.body.features[0].center)

  //handle low-level error first:
  if( error ) {
    console.log('Unable to connect to service')
   
   // handle error if there is no location found--input error 
  }else if( response.body.error ){
    console.log('Unable to find location')

  } else if (response.body.features.length === 0) {
     console.log('Sorry, Charlie!')
  
  }else {
    const longitude = response.body.features[0].center[0]

    const latitude = response.body.features[0].center[1]

    console.log(`Longitude is: ${longitude}. Latitude is: ${latitude}`)
  }  
})