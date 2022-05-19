import mongoose from 'mongoose';

const UserSchema_02 = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide name'],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'please provide email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'please provide password'],
    minLength: 6,
    selected: false,
  },
  lastName: {
    type: String,
    maxLength: 30,
    default: 'lastName',
    trim: true,
  },
  location: {
    type: String,
    maxLength: 30,
    default: 'my city',
    trim: true,
  },
});

export default mongoose.model('User_02', UserSchema_02);
