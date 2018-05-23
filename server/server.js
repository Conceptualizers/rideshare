const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


var db = require('./db');

var OrgController = require('./org/OrgController');
app.use('/orgs', OrgController);

var AdminController = require('./admin/AdminController');
app.use('/admins', AdminController);

var server = app.listen(port, function() {
  console.debug('Express server listening on port ' + port);
});