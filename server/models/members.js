const mongoose = require('mongoose');

const clubMemberSchema = new mongoose.Schema({
  memberID: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String
  },
  image: {
    type: String
  },

  emailId: {
    type: String,
    required: true,
    unique: true
  },

  linkedIn: {
    type: String,
    required: true
  }

});

const ClubMember = mongoose.model('ClubMember', clubMemberSchema);

module.exports = ClubMember;
