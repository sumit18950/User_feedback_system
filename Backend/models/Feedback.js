import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  category: {
    type: String,
    enum: ['bug', 'feature', 'suggestion', 'other'],
    default: 'other'
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Feedback', feedbackSchema);
