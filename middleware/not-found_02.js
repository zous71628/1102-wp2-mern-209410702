const notFoundMiddleware_02 = (req, res) => {
    res.status(404).send('Route does not exist')
};

export default notFoundMiddleware_02;
