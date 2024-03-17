const express = require('express');
const router = express.Router();

// Assuming you have a Member model defined elsewhere
const Member = require('../models/members');

// POST method to add a new member
router.post('/members', async (req, res) => {
  try {
    console.log("Inside the post statement")
    console.log(req.body);
    const newMember = await Member.create(req.body);
    res.status(201).json(newMember);
  } catch (error) {
    console.error('Error adding member:', error);
    res.status(500).json({ message: 'An error occurred while adding the member.' });
  }
});

// GET method to retrieve all members
router.get('/members', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ message: 'An error occurred while fetching members.' });
  }
});

module.exports = router;
