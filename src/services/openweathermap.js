import axios from 'axios';

let key = 'eb2567e4bd9009f1e02d04aaae18aefa';

const API_URL = `https://api.openweathermap.org/data/2.5`;

const OpenWeatherAPI  = {
    fiveDayAverageCityId(cityId=524901) {
        return axios.get(`${API_URL}/forecast/daily?units=imperial&cnt=5&id=${cityId}&APPID=${key}`)
            .then(data => {
                return data.data;
            })
            .catch(err => err.response.data)
    },
    fiveDayAverageCityName(cityName='New York') {
        return axios.get(`${API_URL}/forecast/daily?q=${cityName}&units=imperial&cnt=5&APPID=${key}`)
            .then(data => {
                return data.data;
            })
            .catch(err => err.response.data)
    }
}

export default OpenWeatherAPI;