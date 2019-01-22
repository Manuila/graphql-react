import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: 'String',
    required: true
  },
  description: {
    type: 'String'
  },
  date: {
    type: 'Date',
    default: Date.now,
    required: true
  },
  isPublished: {
    type: 'Boolean',
    default: false,
    required: true
  },
  isLiked: {
    type: 'Boolean',
    default: false,
    required: true
  },
});

export default mongoose.model('Post', postSchema);
