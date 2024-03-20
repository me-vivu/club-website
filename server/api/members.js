const express = require('express');
const router = express.Router();
const Member = require('../models/members');


router.post('/members', async (req, res) => {
  try {
    const { memberID } = req.body;
    
    
    const existingMember = await Member.findOne({ memberID });

    if (existingMember) {
      
      console.log('Updating existing member:', existingMember);
      await Member.findOneAndUpdate({ memberID }, req.body);
      res.status(200).json({ message: 'Member updated successfully.' });
    } else {
      console.log('Creating a new member:', req.body);
      const newMember = await Member.create(req.body);
      res.status(201).json(newMember);
    }
  } catch (error) {
    console.error('Error adding/updating member:', error);
    res.status(500).json({ message: 'An error occurred while adding/updating the member.' });
  }
});

// GET method to retrieve all members
router.get('/members', async (req, res) => {
  try {
    const members = await Member.find().sort({"memberID": 1});
    
    res.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ message: 'An error occurred while fetching members.' });
  }
});


router.delete('/members/:memberID', async (req, res) => {
  try {
    const { memberID } = req.params;

    // Check if the member exists
    const existingMember = await Member.findOne({ memberID });

    if (existingMember) {
      // If the member exists, delete them
      await Member.deleteOne({ memberID });
      console.log('Member deleted successfully:', memberID);
      res.status(200).json({ message: 'Member deleted successfully.' });
    } else {
      // If the member doesn't exist, return an error
      console.error('Member not found:', memberID);
      res.status(404).json({ message: 'Member not found.' });
    }
  } catch (error) {
    console.error('Error deleting member:', error);
    res.status(500).json({ message: 'An error occurred while deleting the member.' });
  }
});

module.exports = router;
