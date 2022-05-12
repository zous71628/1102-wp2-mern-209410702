//Common JS
// const express = require ('express');

import express from 'express';

const app = express();

import dotnev from 'dotenv';
dotnev.config();
//db and authenticateUser
import connectDB_02 from './db/connect_02.js';

import authRoutes_02 from './routes/authRoutes_02.js';
import notFoundMiddleware_02 from './middleware/not-found_02.js';
import errorHandlerMiddleware_02 from './middleware/error-handler_02.js';
app.use(express.json());
//middleware

app.get('/', (req, res) => {
  // throw new Error('testing for error');
  res.send('Welcome Chih Wei 209410702');
});

app.use('/api/v1/auth_02', authRoutes_02);

app.use(notFoundMiddleware_02);
app.use(errorHandlerMiddleware_02);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB_02(process.env.MONGO_LOCAL_URL).then(() => {
      console.log('Connecting to MongoDB');
    });
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
