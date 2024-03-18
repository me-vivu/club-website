const express = require('express');
const router = express.Router();
const Event = require('../models/events');

// POST request to create a new event
router.post('/addEvents', async (req, res) => {

  console.log(req.body);
  try {
    const event = new Event({
      eventID: req.body.eventID,
      eventName: req.body.eventName,
      eventImage: req.body.eventImage,
      description: req.body.description,
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      maxAttendees: req.body.maxAttendees,
      formLink: req.body.formLink
    });

    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET request to fetch all events
router.get('/addEvents', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
