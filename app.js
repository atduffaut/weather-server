const request = require('request');

const url = "http://api.weatherstack.com/current?access_key=aa5d3ac980418126d7a8c851c48d7e98&query=gainesville";

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});