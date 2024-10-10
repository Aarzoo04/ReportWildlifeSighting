require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

const mongoURI = process.env.Mongo_URI;

const connect = mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000, // Timeout for server selection
    socketTimeoutMS: 45000 // Timeout for socket inactivity
  })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));


//Create Schema

const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
});


// Create collection
const User = new mongoose.model("Users", LoginSchema);

const TigerSchema = new mongoose.Schema({
    
        tiger_id: String,
        image: String,
        timestamp: Date,
        location: String
})

const Tiger = new mongoose.model("TigerDetails", TigerSchema);

module.exports = { User, Tiger };






