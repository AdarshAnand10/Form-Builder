const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  type: {
    type: String, 
    enum: ['Categorize', 'Cloze', 'Comprehension'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    default: 1
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  image: {
    type: String,
    default: null
  }
});

const FormSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  headerImage: {
    type: String,
    default: null
  },
  questions: [QuestionSchema],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  publicId: {
    type: String,
    unique: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Form', FormSchema);
