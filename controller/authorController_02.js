import User_02 from '../models/User_02.js';

export const register_02 = async (req, res) => {
  console.log('body', req.body);
  const user = await User_02.create(req.body);
  res.status(201).json({ user });
  // res.send('register user -- 黃致瑋, 209410702');
};

export const login_02 = async (req, res) => {
  res.send('login user -- 黃致瑋, 209410702');
};

export const updateUser_02 = async (req, res) => {
  res.send('Update user -- 黃致瑋, 209410702');
};
