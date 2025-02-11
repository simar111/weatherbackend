const express = require("express");
const dotenv = require("dotenv");
const weatherRoutes = require("./routes/weather");
const connectDB = require("./db"); // Import the connectDB function
const cors = require("cors");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: "*", methods: "GET, POST, OPTIONS, PUT, DELETE" }));

// Routes
app.use("/api/weather", weatherRoutes);

// Connect to MongoDB before starting the server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error("Error connecting to the database:", err);
});
