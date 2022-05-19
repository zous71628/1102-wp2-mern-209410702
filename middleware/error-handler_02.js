const errorHandlerMiddleware_02 = (err, req, res, next) => {
  console.log('error', err);
  res.status(500).json({ msg: err });
};

export default errorHandlerMiddleware_02;
