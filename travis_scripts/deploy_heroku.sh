#!/bin/bash
    if [ "$1" = "development" ]; then
      docker login --username="$HEROKU_LOGIN" --password="$HEROKU_API_KEY" registry.heroku.com;
      docker build --rm=false -t --build-arg OPENWEATHERAPI_KEY="$OPENWEATHER_API_KEY" registry.heroku.com/weather-app-dev/web:latest .;
      docker push registry.heroku.com/weather-app-dev/web:latest;
    fi

    if [ "$1" = "production" ]; then
      docker login --username="$HEROKU_LOGIN" --password="$HEROKU_API_KEY" registry.heroku.com;
      docker build --rm=false -t --build-arg OPENWEATHERAPI_KEY="$OPENWEATHER_API_KEY" registry.heroku.com/your-weather-forecast/web:latest .;
      docker push registry.heroku.com/your-weather-forecast/web:latest;
    fi