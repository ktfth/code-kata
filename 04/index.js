'use strict';
const fs = require('fs');

const weather = fs.readFileSync('./weather.dat');

const data = weather
               .toString()
               .split('\n')
               .map(v => v.split(' ').filter(w => w !== ''))
               .filter(v => v.length > 0);

let maxWeatherData = 0;
let minWeatherData = 0;

for (let line of data) {
  let maxCurr = parseFloat(line[1], 10);
  let minCurr = parseFloat(line[2], 10);
  if (!isNaN(maxCurr)) {
    maxWeatherData = Math.max(maxCurr, maxWeatherData);
  } if (!isNaN(minCurr)) {
    minWeatherData = Math.min(minCurr, minWeatherData);
  }
}

console.log(maxWeatherData, minWeatherData);
