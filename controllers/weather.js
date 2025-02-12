const axios = require("axios");
const User = require("../models/user");

const API_KEY = "b5a81a5abe4d3b3fed9c8f25294c9790"; // Ensure your API key is correct

// Fetch current weather by city name
exports.getWeatherByCity = async (req, res) => {
  const { city } = req.params;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Weather API Error:", error.response?.data || error.message);

    const errorMessage = error.response?.data?.message || "Error fetching weather data";
    res.status(error.response?.status || 500).json({ error: errorMessage });
  }
};
exports.getNews = async (req, res) => {
  const { city } = req.params;

  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=weather&apiKey=009e4b71f1244220ae3cc8b35707124a"
    );

    res.json(response.data);
  } catch (error) {
    console.error("News API Error:", error.response?.data || error.message);

    const errorMessage = error.response?.data?.message || "Error fetching News data";
    res.status(error.response?.status || 500).json({ error: errorMessage });
  }
};
// Fetch weather forecast (5 days, every 3 hours) by city name
exports.getWeatherForecastByCity = async (req, res) => {
  const { city } = req.params;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Weather Forecast API Error:", error.response?.data || error.message);

    const errorMessage = error.response?.data?.message || "Error fetching weather forecast";
    res.status(error.response?.status || 500).json({ error: errorMessage });
  }
};

// Fetch current weather by coordinates
exports.getWeatherByCoordinates = async (req, res) => {
  const { lat, lon } = req.params;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Weather API Error:", error.response?.data || error.message);

    const errorMessage = error.response?.data?.message || "Error fetching weather data";
    res.status(error.response?.status || 500).json({ error: errorMessage });
  }
};
exports.getWeatherForecast = async (req, res) => {
  const { city } = req.params;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching forecast data" });
  }
};
