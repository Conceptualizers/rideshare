var mongoose = require('mongoose');  
var AdminSchema = new mongoose.Schema({  
  user_id: Number,
  email: String,
});
mongoose.model('Admin', AdminSchema);

module.exports = mongoose.model('Admin');