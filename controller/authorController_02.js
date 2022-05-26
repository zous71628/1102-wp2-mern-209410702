import User_02 from '../models/User_02.js';
import { StatusCodes } from 'http-status-codes';

export const register_02 = async (req, res, next) => {
  console.log('body', req.body);
  const user = await User_02.create(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user, token });
  // try {
  //   console.log('body', req.body);
  //   const user = await User_02.create(req.body);
  //   const token = user.createJWT();
  //   console.log('token', token)
  //   res.status(201).json({ user,token });
  // } catch(err) {
  //   // res.status(500).json({ msg: "Error on register user" });
  //   next(err)
  // }
  // // res.send('register user -- 黃致瑋, 209410702');
};

export const login_02 = async (req, res) => {
  res.send('login user -- 黃致瑋, 209410702');
};

export const updateUser_02 = async (req, res) => {
  res.send('Update user -- 黃致瑋, 209410702');
};
0;
