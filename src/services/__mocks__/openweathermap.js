const fakeData = {
    "city": {
        "id": 4887398,
        "name": "Chicago",
        "coord": {
            "lon": -87.6245,
            "lat": 41.8756
        },
        "country": "US",
        "population": 2695598
    },
    "cod": "200",
    "message": 0.8630233,
    "cnt": 5,
    "list": [{
        "dt": 1524243600,
        "temp": {
            "day": 54.32,
            "min": 36.5,
            "max": 54.32,
            "night": 36.5,
            "eve": 46.47,
            "morn": 53.83
        },
        "pressure": 1024.41,
        "humidity": 75,
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "02d"
        }],
        "speed": 2.3,
        "deg": 60,
        "clouds": 8
    }, {
        "dt": 1524330000,
        "temp": {
            "day": 43.29,
            "min": 36.25,
            "max": 43.86,
            "night": 38.82,
            "eve": 42.03,
            "morn": 36.25
        },
        "pressure": 1022.93,
        "humidity": 74,
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "speed": 2.28,
        "deg": 78,
        "clouds": 88
    }, {
        "dt": 1524416400,
        "temp": {
            "day": 44.1,
            "min": 38.7,
            "max": 44.62,
            "night": 41.72,
            "eve": 43,
            "morn": 38.7
        },
        "pressure": 1020.71,
        "humidity": 71,
        "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }],
        "speed": 8.43,
        "deg": 51,
        "clouds": 56
    }, {
        "dt": 1524502800,
        "temp": {
            "day": 58.21,
            "min": 42.04,
            "max": 58.21,
            "night": 48.85,
            "eve": 57.02,
            "morn": 42.04
        },
        "pressure": 1010.27,
        "humidity": 0,
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
        }],
        "speed": 9.35,
        "deg": 91,
        "clouds": 6
    }, {
        "dt": 1524589200,
        "temp": {
            "day": 57.83,
            "min": 42.78,
            "max": 57.83,
            "night": 46.74,
            "eve": 56.14,
            "morn": 42.78
        },
        "pressure": 1007.11,
        "humidity": 0,
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
        }],
        "speed": 8.23,
        "deg": 45,
        "clouds": 1
    }]
}


const fake404Data = {"cod":"404","message":"city not found"};

const OpenWeatherAPI = {
    async fiveDayAverageCityName(cityName = 'New York') {
        const response = await new Promise((resolve) => {
            if(cityName === 'dhdhdh') {
                resolve(fake404Data);
            }
            resolve(fakeData);
        });

        return response;
    }
}

export default OpenWeatherAPI;