// EventsController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Event = require('./Event');

//Post, Get, Put, Delete Methods

//CREATES A NEW EVENT
router.post('/', function(req, res){
	Event.create({
		name: req.body.name,
		date: req.body.date,
		loc: req.body.loc,
		time: req.body.time,
		drivers: req.body.drivers,
		numOfPpl: req.body.numOfPpl
	},
	function(err, user){
		if(err) return res.status(500).send("There was a 
			problem adding the information to the database.");
	});
});

//RETURNS ALL THE EVENTS IN THE DATABASE
router.get('/', function(req, res){
    Event.find({}, function (err, events) { //???
        if (err) return res.status(500).send("There was a problem finding the events.");
        res.status(200).send(events); //???
    });
});

//GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    Event.findById(req.params.id, function (err, anEvent) {
        if (err) return res.status(500).send("There was a problem finding the event.");
        if (!user) return res.status(404).send("No event found.");
        res.status(200).send(anEvent);
    });
});

//DELETES AN EVENT FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Event.findByIdAndRemove(req.params.id, function (err, anEvent) {
        if (err) return res.status(500).send("There was a problem deleting the event.");
        res.status(200).send("Event "+ Event.name +" was deleted.");
    });
});

//UPDATES A SINGLE EVENT IN THE DATABASE
router.put('/:id', function (req, res) {
	
    Event.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, anEvent) {
        if (err) return res.status(500).send("There was a problem updating the event.");
        res.status(200).send(anEvent);
    });
});




module.exports = router; //Export router to be used in App.js