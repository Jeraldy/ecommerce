const express = require('express');
const userRouter = require('./routers/user.routes');
const AppError = require('./utils/app.error');
const globalErrorHandler = require('./controllers/error.controller');

const app = express();

app.use(express.json());
app.use('/api/v1/user', userRouter);

app.all('*', (req, res, next) => {
    const message = `Can't find ${req.originalUrl} on this server.`;s
    next(new AppError(message, 404));
});

app.use(globalErrorHandler);

module.exports = app