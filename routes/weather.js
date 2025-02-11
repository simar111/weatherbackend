const express = require("express");
const weatherController = require("../controllers/weather");
const router = express.Router();

// Fetch current weather by city name
router.get("/city/:city", weatherController.getWeatherByCity);

// Fetch 5-day weather forecast by city name
router.get("/forecast/:city", weatherController.getWeatherForecastByCity);

// Fetch current weather by coordinates
router.get("/coordinates/:lat/:lon", weatherController.getWeatherByCoordinates);
router.get("/forecast/:city", weatherController.getWeatherForecast);

module.exports = router;
