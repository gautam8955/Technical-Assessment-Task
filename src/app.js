const express = require('express');
const bmiCalculator = require('./router/BMICalculator');

const app = express();

app.use(express.json());
app.use(bmiCalculator);

module.exports = app;
