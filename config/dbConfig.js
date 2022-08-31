const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('MongoDb is Connected');
});

connection.on('error', (error) => {
    console.log('Error MongoDb is Connected', error);
});

module.exports = mongoose;