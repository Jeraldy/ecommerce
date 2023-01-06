module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.staus || 'failed';
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
};