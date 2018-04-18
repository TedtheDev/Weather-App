FROM node:latest
ARG OPENWEATHERAPI_KEY
ENV OPENWEATHERAPI_KEY=${OPENWEATHERAPI_KEY}
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm","start"]
