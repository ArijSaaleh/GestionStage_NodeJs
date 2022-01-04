var mongoose = require('mongoose');
var config = require('./mongodb.json');
//mongoose.connect(config.mongo.url,{useNewUrlParser: true, useUnifiedTopology: true },()=> console.log("connected"));
const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(config.mongo.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }) 

        console.log(`MongoDB connected`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB