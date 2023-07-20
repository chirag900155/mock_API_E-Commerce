const mongoose = require('mongoose');

async function connectToMongodb(UserName ,password) {

    const URI = `mongodb+srv://<UserName>:${password}@cluster0.6smf1n8.mongodb.net/E-Commerce_Website_DB?retryWrites=true&w=majority`

    try{
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    }catch(err){
        console.log(err);
    }
}

module.exports = connectToMongodb;
