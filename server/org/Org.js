var mongoose = require('mongoose');  
var OrgSchema = new mongoose.Schema({  
  name: String,
  admin: Number,
  users: [String]
});
mongoose.model('Org', UserSchema);

module.exports = mongoose.model('Org');