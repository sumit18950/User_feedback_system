import Feedback from '../models/Feedback.js';

export const submitFeedback = async (req, res) => {
  try {
    const { name, email, message, category, rating } = req.body;
    const newFeedback = new Feedback({ name, email, message, category, rating });
    await newFeedback.save();
    res.status(201).json({ success: true, feedback: newFeedback });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
