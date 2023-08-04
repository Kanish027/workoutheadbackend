const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController");

// Get all  workouts
router.get("/", getWorkouts);

// Get single workouts
router.get("/:id", getWorkout);

// Post workout
router.post("/", createWorkout);

// Delete workout
router.delete("/:id", deleteWorkout);

// Update workout
router.patch("/:id", updateWorkout);

module.exports = router;
