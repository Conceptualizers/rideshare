var express = require('express');
var app = express();
var db = require('./db');

var OrgController = require('./Org/OrgController');
app.use('/orgs', OrgController);

var OrgController = require('./Admin/AdminController');
app.use('/admins', AdminController);

module.exports = app;