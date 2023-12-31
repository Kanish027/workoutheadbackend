require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workout");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors({
  origin: '*'
}));

// Middlewares
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to database and listening on port", process.env.PORT);
          });
    })
    .catch((error)=>{
        console.log(error);
    })


