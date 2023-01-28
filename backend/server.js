const mongoose = require('mongoose');
const app = require('./app')

const port = process.env.PORT || 8080;
const database = process.env.DATABASE;


// mongoose.connect(database, { useNewUrlParser: true })
//     .then(_ => console.log("Db connection was successfuly"))
//     .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
