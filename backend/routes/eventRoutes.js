const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  createEvent,
  addSelfToEvent,
  removeSelf,
  getEvents,
} = require("../controllers/eventController");

router.route("/").get(protect, getEvents).post(protect, createEvent);
router.route("/add/:id").put(protect, addSelfToEvent);
router.route("/remove/:id").put(protect, removeSelf);

module.exports = router;
