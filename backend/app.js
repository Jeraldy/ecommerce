const express = require('express');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const helmet = require('helmet');
// const hpp = require('hpp')
const userRouter = require('./routers/user.routes');
const productRouter = require('./routers/product.routes');

const AppError = require('./utils/app.error');
const globalErrorHandler = require('./controllers/error.controller');


const app = express();

app.use(helmet());
app.use(express.json());

// Limit requests from same API
const limiter = rateLimit({
    max: 100, //num of requests
    windowMs: 60 * 60 * 1000, // Per one hour
    message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());
// Data sanitization against XSS
app.use(xss());
// Prevent parameter pollution
//app.use(hpp());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);

app.use('/health', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        statusDesc: 'Api service is up and running'
    });
});

app.all('*', (req, res, next) => {
    const message = `Can't find ${req.originalUrl} on this server!`;
    next(new AppError(message, 404));
});

app.use(globalErrorHandler);

module.exports = app