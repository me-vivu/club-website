const mongoose = require('mongoose');

const carouselSchema = new mongoose.Schema({
  header: {
    type: String,
    required: true
  },
  firstLine: {
    type: String,
    required: true
  },
  secondLine: {
    type: String
  },
  link: {
    type: String,
    required: true
  }
}); 

const Carousel = mongoose.model('Carousel', carouselSchema);

module.exports = Carousel;
