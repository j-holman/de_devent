const { bgBlue } = require("colors");
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
    creator: req.user.username,
    users: req.user.username,
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
    { $addToSet: { users: req.user.username } },
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
  console.log("getEvents Called".red.underline);
  const events = await Event.find({});

  res.status(200).json(events);
});

//@desc   Delete Event by id
//@route  DELETE /api/events/:id
//@access Private.
const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    res.status(400);
    throw new Error("Event Not Found");
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  //Verify that the logged in user is the creator of the event.
  if (event.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User Not Authorized.");
  }

  await event.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  createEvent,
  addSelfToEvent,
  removeSelf,
  getEvents,
  deleteEvent,
};
