import axios from 'axios';

let key;
if(process.env.OPENWEATHERAPI_KEY) {
    key = process.env.OPENWEATHERAPI_KEY;
} else {
    key = require('../keys/openweather').key;
}

const API_URL = `https://api.openweathermap.org/data/2.5/`;

const OpenWeatherAPI  = {
    fiveDayAverageCityId(cityId=524901) {
        return axios.get(`${API_URL}/forecast/daily?units=imperial&cnt=5&id=${cityId}&APPID=${key}`)
            .then(data => {
                return data.data;
            })
            .catch(err => console.log(err))
    }
}

export default OpenWeatherAPI;