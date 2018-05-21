// Vehicles.js
var mongoose = require('mongoose');  
var VehiclesSchema = new mongoose.Schema({  
  vehicle_id: Number,
  color: String,
  brand: String,
  model: String,
  Type: String,
  Number of Seats: Number
});
mongoose.model('Vehicles', VehiclesSchema);
module.exports = mongoose.model('Vehicles');