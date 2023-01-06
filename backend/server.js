// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const app = require('./app')

// dotenv.config({ path: './config.env' });

// const port = process.env.PORT || 3000;
// const database = process.env.DATABASE

// mongoose.connect(database, {})
//     .then(_ => console.log("Db connection was successfuly"))
//     .catch(err => console.log(err));

// app.listen(port, () => {
//     console.log(`App is running on port ${port}`);
// });

const express = require('express');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
