#!/bin/bash
    if [ "$1" = "development" ]; then
      docker login --username="$HEROKU_LOGIN" --password="$HEROKU_API_KEY" registry.heroku.com;
      docker build --rm=false -t registry.heroku.com/weather-app-dev/web:latest .;
      docker push registry.heroku.com/weather-app-dev/web:latest;
    fi

    if [ "$1" = "production" ]; then
      docker login --username="$HEROKU_LOGIN" --password="$HEROKU_API_KEY" registry.heroku.com;
      docker build --rm=false -t registry.heroku.com/your-weather-forecast/web:latest .;
      docker push registry.heroku.com/your-weather-forecast/web:latest;
    fi