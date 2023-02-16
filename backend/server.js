const mongoose = require('mongoose');
const app = require('./app')

const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'local';

let databaseConnection = '';
if(env === 'production'){
    databaseConnection = process.env.DATABASE_PROD;
}else if(env === 'development'){
    databaseConnection = process.env.DATABASE_DEV;
}

// mongoose.connect(databaseConnection, { useNewUrlParser: true })
//     .then(_ => console.log("Db connection was successfuly"))
//     .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
