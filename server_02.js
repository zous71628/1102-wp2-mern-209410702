//Common JS
// const express = require ('express');

import express from 'express';

const app = express();

import dotnev from 'dotenv';
dotnev.config();
//db and authenticateUser
import 'express-async-errors';
import morgan from 'morgan';
import connectDB_02 from './db/connect_02.js';

import authRoutes_02 from './routes/authRoutes_02.js';
import notFoundMiddleware_02 from './middleware/not-found_02.js';
import errorHandlerMiddleware_02 from './middleware/error-handler_02.js';
import cors from 'cors';
app.use(cors());
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());
//middleware

app.get('/', (req, res) => {
  // throw new Error('testing for error');
  // res.send('Welcome Chih Wei 209410702');
  res.json({ msg: 'Welcome Chih Wei 209410702' });
});
app.get('/api/v1', (req, res) => {
  // throw new Error('testing for error');
  // res.send('Welcome Chih Wei 209410702');
  res.json({ msg: 'API V1 209410702 黃致瑋' });
});

app.use('/api/v1/auth_02', authRoutes_02);

app.use(notFoundMiddleware_02);
app.use(errorHandlerMiddleware_02);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB_02(process.env.MONGO_CLOUD_URL).then(() => {
      console.log('Connecting to MongoDB');
    });
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
