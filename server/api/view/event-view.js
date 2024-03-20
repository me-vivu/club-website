// Import necessary modules
const express = require('express');
const router = express.Router();
const Event = require('../../models/events'); 

// Define a route handler for fetching data from the database
router.get('/event-view/:eventId', async (req, res) => {
  try {
    // Fetch data from the database
    const eventId = req.params.eventId;

    const event = await Event.findOne({ eventID: eventId });
    if (!event) {
        return res.status(404).json({ message: 'Event not found' });
    }
        
    // Send the fetched data as JSON response
    res.json(event);
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Export the router
module.exports = router;
