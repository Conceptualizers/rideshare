// Event.js
var mongoose = require('mongoose');

var EventSchema = new mongoose.Scheme({
	name: String,
	address_line_1: String,
	address_line_2: String,
	city: String,
	state: String,
	zipcode: Number,
	date: Date,
	description: String,
	photo: Image,
	attendees: [Number],
	rides: 
	
});
mongoose.model('Event', EventSchema);


module.exports = mongoose.model('Event');