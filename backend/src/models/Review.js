const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  reviewDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for retrieving restaurant reviews
reviewSchema.index({ restaurantId: 1 });

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
