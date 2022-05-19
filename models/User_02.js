import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email ',
    },
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

UserSchema_02.pre('save', async function () {
  console.log('password', this.password);
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema_02.methods.createJWT = function () {
  // console.log('this',this)
  return jwt.sign(
    {
      userId: this._id,
    },
    'jwtsecret',
    { expiresIn: "1d" }
  );
};
export default mongoose.model('User_02', UserSchema_02);
