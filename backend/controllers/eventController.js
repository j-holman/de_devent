const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");
const User = require("../models/userModel");

//@desc     Create a new event
//@route    POST /api/events
//@access   Private.
const createEvent = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please include a title.");
  }

  const event = await Event.create({
    title: req.body.title,
    date: req.body.date,
    time: req.body.time,
    url: req.body.url,
    users: req.user.id,
  });

  res.status(200).json(event);
});

//@desc   User adds self to an event.
//@route  PUT /api/events/:id
//@access Private.
const addSelfToEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    res.status(400);
    throw new Error("Event Not Found.");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  const updatedEvent = await Event.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { users: req.user.id } },
    {
      new: true,
    }
  );

  res.status(200).json(updatedEvent);
});

//@desc   User removes self from an event.
//@route  PUT /api/events/remove/:id
//@access Private.
const removeSelf = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    res.status(400);
    throw new Error("Event Not Found.");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  const updatedEvent = await Event.findByIdAndUpdate(
    req.params.id,
    { $pull: { users: req.user.id } },
    {
      new: true,
    }
  );

  res.status(200).json(updatedEvent);
});

//@desc   Get All Events
//@route  GET /api/events
//@access Private
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({});

  res.status(200).json(events);
});

module.exports = {
  createEvent,
  addSelfToEvent,
  removeSelf,
  getEvents,
};
