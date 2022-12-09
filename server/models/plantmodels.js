const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://sakurakiyama718:<password>@cluster0.iz6bdpx.mongodb.net/?retryWrites=true&w=majority'

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'SoloProject',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

  
const Schema = mongoose.Schema;

const plantsSchema = new Schema({
  date: { type: String, required: true }, 
  location: { type: String, required: true }, 
  description: { type: String, required: true }, 
  plantName: { type: String, required: true }, 
  image: {type: String, required: true}, 
})
const Plants = mongoose.model('Plants', plantsSchema); 

module.exports = {Plants}; 