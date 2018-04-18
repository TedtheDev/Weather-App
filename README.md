# Weather App

Your ordinary weather app that lets you type in a city to be able to get the next 5 days of weather data (only Average Temperature for now)

## How to install app
- ```npm install```

## Build
- Test and Build ```npm run build```
- Build for Dev ```npm run build:dev```
- Build for Prod ```npm run build:prod```

## Test
- ```npm run test```
- To watch run ```npm run test:watch```

## Thought Process

When developing this app, I was trying to think of a minimalistic way to be able to enter in a city and click a button to get weather data. I tried to make it responsive so the layout is similar on mobile as it is on the desktop or an tablet.

### Continuous Integration and Deployment
The first thing I thought about was using TravisCI to have continuous integration platform involved as well as being able to deploy. 

### Host
I love using Heroku and it is free, so I am hosting two instances of my application on Heroku. I have a 'dev' environment and a 'prod' environement. I am also using a Dockerfile to be able to build a Docker image so it can deploy a Docker container very easily as well as others being able to pull the image off of Dockerhub. 

### Branching Strategy
I used was to use the Gitflow Workflow branching strategy. I have two main branches. One is master (represents production code) and one is development (represents development code). I believe this strategy is very good for checking what code is where in what environment. I am the only collaborater so far, so I dont have any PR's, but I would choose to have PR's be submitted against the development branch with other collaboraters feature branches. 

### Development Environment
I also thought about my development environment to be able to develop quickly and on the fly. I am using Webpack, because it is very common and good to configure and you can use webpack-dev-server to run locally when developing.

### Libraries
React - I really enjoy using it and challenging myself to be better at coding in it. 

Jest - It is very easy to configure and use. I also recently started using it more so I am getting more comfortable with it.

React-Router - I was thinking of having some routes in there, but currently I do not have any routes. Something to add would be to be able to bookmark a route. For Example, a user could search for website.com/weather/Chicago, and it would automatically pull up weather in Chicago. This is something I would add with more time.

Axios - common library to fetch network requests and uses a promise. Axios is very simple to use.

Recharts - In beta, but really easy to configure for something such as the simple charts that I have

Enzyme - I want to explore this library more but seems pretty common to test with Jest and React. AirBnB has some pretty strong libraries such as this one

styled-components - very easy and fun to use. Makes css more localized to component that needs styling.

*Redux - redux is a great state mangement library, but I chose not to use it, because I felt I didn't have too much state and could hold majority of the state at the top level in the App component

### Folder Structure
This area is something I wanted to improve on. I wanted to think more about components and to practice that more so I tried following the Component Structure pattern.

### Testing Strategy
What I have read and believe, I have one snapshot test per each component, but some components also have more testing. One component that only has a snapshot is the App component. I chose to only include a snapshot test, because other tests will cover the functionality and it gets very complex with multiple components in it.

### Color Scheme
I originally tried to pick a blue color, because blue is normally associated with weather, the sky, clouds, but I couldnt find colors that went together from messing around with a color wheel. I found Adobe's color website and found a popular color scheme, which I thought had some nice appealing, unique colors. I chose to have a lighter color as the main background because it is easier on the eyes and I think it is easier to read dark text on a ligher background.

### Layout and Styling
I really like animations, but too many animations can be too much so I tried to keep them short, sweet, and simple. Animations do help the UX process, such has a loading symbol to help signal something is doing something so hang tight. I am using CSS Grid, because it is easy to create a layout of what you want. Most modern browsers support CSS Grid now. CSS Grid was adopted very quickly, but backwards comptibility will need to have a polyfill

## Tradeoffs

### Redux
Redux is a good library, but isn't needed when you can just use React state. I felt I didn't have many components that needed access to weather day, so I chose to structure state with React state.

### React vs Angular vs jQuery etc


### Jest vs Mocha
I chose Jest because I have recently been using it more, but it is easy to set up right out of the box and it has the snapshot functionality out of the box.

### CSS Grid
I really enjoy CSS Grid and it is easy to create a layout rather than using floats, grid system, bootstrap, table layout, etc. One thing that is a con of CSS Grid is that it is more of a newer standard so older browsers will not be able to see the layout so I would need to implement a polyfill

### Styled-Components vs CSS/SASS/LESS/CSS-In-JSS
I chose styled-components for styling, because it keeps your css local to the component and you don't need to worry about specific class names. 