var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Vehicles = require('./Vehicles');

// CREATES A NEW VEHICLE
router.post('/', function (req, res) {
    Vehicles.create({
            vehicle_id : req.body.vehicle_id,
            color: req.body.color,
            brand: req.body.brand,
			model: req.body.model,
			type: req.body.type,
			number_of_seats: req.body.number_of_seats
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(vehicle);
        });
});

// RETURNS ALL THE VEHICLES IN THE DATABASE
router.get('/', function (req, res) {
    Vehicles.find({}, function (err, vehicles) {
        if (err) return res.status(500).send("There was a problem finding the vehicles.");
        res.status(200).send(vehicles);
    });
});

// GETS A SINGLE VEHICLE FROM THE DATABASE
router.get('/:id', function (req, res) {
    Vehicles.findById(req.params.id, function (err, vehicles) {
        if (err) return res.status(500).send("There was a problem finding the vehicle.");
        if (!vehicle) return res.status(404).send("No vehicle found.");
        res.status(200).send(vehicle);
    });
});

// DELETES A VEHICLE FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Vehicles.findByIdAndRemove(req.params.id, function (err, vehicle) {
        if (err) return res.status(500).send("There was a problem deleting the vehicle.");
        res.status(200).send("Vehicle "+ vehicle.vehicle_id +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    Vehicles.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, vehicle) {
        if (err) return res.status(500).send("There was a problem updating the vehicle.");
        res.status(200).send(vehicle);
    });
});

router.get('/:id', function (req, res) {
    Vehicles.findById(req.params.id, function (err, vehicle) {
        if (err) return res.status(500).send("There was a problem finding the vehicle.");
        if (!vehicle) return res.status(404).send("No vehicle found.");
        res.status(200).send(vehicle);
    });
});

module.exports = router;