const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { console.log('Connected to MongoDB!') })
  .catch((err) => { console.error('Could not connect to database', err); });

const { Schema } = mongoose;

const TrailSchema = new Schema({
  id: Number,
  name: String,
  descriptions: String,
  elevationChange: String,
  distance: String,
  hikingTime: String,
  url: String,
});

const Me3Trail = mongoose.model('Me3Trail', TrailSchema);

module.exports = Me3Trail;
