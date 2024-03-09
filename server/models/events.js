const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventID: {
    type: String,
    required: true,
    unique: true
  },
  eventName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  maxAttendees: {
    type: Number,
    default: null // Null indicates no maximum limit
  }
});

const Event = mongoose.model('events', eventSchema);

module.exports = Event;
