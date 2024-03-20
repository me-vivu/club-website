const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectID: {
    type: String,
    required: true,
    unique: true
  },
  projectName: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String
  },
  
  secondImg: {
    type: String
  },

  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['Ongoing', 'Completed'],
    default: 'Ongoing'
  }

});

const Project = mongoose.model('projects', projectSchema);

module.exports = Project;
