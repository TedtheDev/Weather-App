# Weather App

Your ordinary weather app that lets you type in a city to be able to get the next 5 days of weather data (only Average Temperature for now)

## How to install the app
1. Clone the project to a directory
2. ```git clone https://github/TedtheDev/Weather-App.git```
3. ```cd Weather-App```
4. ```npm install```

## Run in your local environment
1. ```npm run serve:dev```
This will run a local Express server in development mode in Webpack
2. Navigate to localhost:8080 in your browser

## Test Commands
- ```npm run test```
- To watch run ```npm run test:watch```

## Build Commands
- Test and Build with ```npm run build```
- Build for Dev with ```npm run build:dev```
- Build for Prod with ```npm run build:prod```

## Thought Process while developing this app

When developing this app, I was trying to think of a minimalistic way to be able to enter in a city and click a button to get weather data. I tried to make it responsive so the layout is similar on mobile as it is on a desktop or a tablet.

### Continuous Integration and Deployment
The first thing I thought about was using TravisCI to have a continuous integration platform to run tests in a sandbox environment and deploy to a host. I am also using a Dockerfile to be able to build a Docker image so it can deploy a Docker container very easily. I also have two images (dev and latest) being pushed to DockerHub.

### Host
I love using Heroku and it is free, so I am hosting two instances of my application on Heroku. I have a [dev - https://weather-app-dev.herokuapp.com/](https://weather-app-dev.herokuapp.com/) environment and a [prod - https://your-weather-forecast.herokuapp.com/](https://your-weather-forecast.herokuapp.com/) environment. 

### Branching Strategy
I prefer the Gitflow Workflow branching strategy. I have two main branches. One is master (represents production code) and one is development (represents development code). I believe this strategy is very good for knowing which code is in production and development. I am the only collaborator so far, so I don't have any PR's against the development branch. If there were more collaborators, I would choose to have PR's be submitted against the development branch with other collaborators' forked/cloned feature branches. 

### Development Environment
I like to develop quickly and on the fly so I chose to use Webpack. I am using Webpack, because it is very common and good to configure React applications, use loaders, and other plugins. Webpack-dev-server is useful to be able to run a local server when developing. I also have hot reload on, so the page automatically refreshes for you. 

### Libraries
- React - I really enjoy using it and challenging myself to be better at coding in it. 

- Jest - It is very easy to configure and use. I also recently started using it more so I am getting more comfortable with it.

- Enzyme - I want to explore this library more but seems pretty common to test with Jest and React. Airbnb has some pretty strong libraries such as this one

- React-Router - I was thinking of having some routes in there, but currently I do not have any routes. Something to add would be the ability to bookmark a route. For Example, a user could search for website.com/weather/Chicago, and it would automatically pull up the weather in Chicago. This is something I would add with more time.

- Axios - common library to fetch network requests and uses promises. Axios is very simple to use and I believe very light.

- Recharts - In beta, but I found it really easy to configure for simple charts. Very plug-and-play and easy to implement.

- styled-components - very easy and fun to use. Makes CSS more localized to component that needs styling.

- *Redux - redux is a great state management library, but I chose not to use it, because I felt I didn't have too much state and could hold majority of the state at the top level in the App component.

- Prop-Types - React prop-types are very useful and good for creating React components. I do have some here and there, but I wish I added more to each component so there is type checking when components are reused. I would add more prop-types if I had time.

### Folder Structure
This area is something I wanted to improve on. I wanted to think more about components and to practice modular code more so I tried following the Component Folder pattern.

### Testing Strategy
What I have read from articles and believe is good practice is to have at least one snapshot test per component, but some components also have more testing. Enzyme is great to use to be able to check dom elements and simulate events.

### Color Scheme
I originally tried to pick a blue color, because blue is normally associated with weather, the sky, clouds, etc, but I couldn't find colors that went together with a color wheel. I found Adobe's color website and found a popular color scheme, which I thought had some nice appealing, unique colors. I chose to have a lighter color as the main background because it is easier on the eyes and I think it is easier to read dark text on a lighter background.

### Layout and Styling
I am using CSS Grid, because it is easy to create a layout in CSS vs Bootstrap and a grid system. Most modern browsers support CSS Grid now. CSS Grid was adopted very quickly, but backwards compatibility will need to have a polyfill.

## Tradeoffs

### Redux
Redux is a good library, but isn't needed when you can just use React state. I felt I didn't have many components that needed access to weather data, so I chose to structure state with React state. I would use Redux if there was more state. For example, if users wanted to create an account and save their information or if you could research a city and then book a flight there based on weather.

### React vs Angular vs jQuery etc

This exercise could have been made with any framework, but I chose React. Some tradeoffs with React would be that the user needs to have JavaScript enabled in order for it to run. If the user doesn't, then I guess they can't use it. Another way to combat that maybe is to use server-side rendering with React and send rendered React components from the server.

### Jest vs Mocha
I chose Jest because I have recently been using it more, but it is easy to set up right out of the box and it has the snapshot functionality out of the box. I could have used Mocha, but I feel that needs a bit more configuring to set up.

### CSS Grid
I really enjoy CSS Grid. It is easy to create a layout rather than using floats, a grid system, bootstrap, table layout, etc. One thing though, is CSS Grid is a con in a way. It is a newer standard, so older browsers will not be able to see the layout so I would need to implement a polyfill.

### Styled-Components vs CSS/SASS/LESS/CSS-In-JSS
I chose styled-components for styling, because it keeps your CSS local to the component and you don't need to worry about specific class names cluttering up the space like Primary_Button_1, Primary_Button_2, where you might have to with just basic CSS or a pre-processor. Using styled-components though does introduce a bigger JS bundle and more React components

## Would like to implement in the future
### Features
- Route with parameters to bookmark a city, ex. www.weatherapp.com/weather/Chicago or www.weatherapp.com/Chicago
- More detailed data per day, more granular data, drill down data, where you click on a show more and a modal or slider shows up with more about the weather
- City Name on top of the forecast tiles to remind you which city's weather data you are looking at
- A nicer loading animation
### Tech Debt
- I would like to break up some components more. For example, My SearchBar is very coupled with the input and the Button. Another example is the ForecastTile. I would like to break out some individual parts like the Rechart. I can make it its own component, but was running out of time.
- Perhaps, I have too many moving parts like Docker, TravisCI, and deploying automatically to Heroku, just for a small App, but I feel it is set up in a good way to practice good development and be able to add more features with confidence.
### Fixes
- I would like to fix some layout issues that I am having with the Header and Footer being fixed along with the ForecastTiles when on a smaller screen. I think I have issues with using percentages with Grid so I would need more time with debugging that
- I would like to fix the ForecastTile layout. I believe I could make it more appealing and a better layout
- Try and cancel the API Key to OpenWeather. I did try to work on this and almost had it, but had issues with passing the API key when building the Docker image and running it. It would pass through, but somehow node inside the Docker container wouldn't set the process.env variable, but it existed in the environment.