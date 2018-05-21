const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

var db = require('./db');

var VehiclesController = require('./vehicles/VehiclesController');
app.use('/vehicles', VehiclesController);

var server = app.listen(port, function() {
  console.debug('Express server listening on port ' + port);
});