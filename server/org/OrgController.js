
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Org = require('./Org');

// CREATES A NEW ORG
router.post('/', function (req, res) {
    Org.create({
            name : req.body.name,
            admin : req.body.admin,
            users : req.body.users
        }, 
        function (err, org) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(org);
        });
});

// RETURNS ALL THE ORGS IN THE DATABASE
router.get('/', function (req, res) {
    Org.find({}, function (err, orgs) {
        if (err) return res.status(500).send("There was a problem finding the orgs.");
        res.status(200).send(orgs);
    });
});

// GETS A SINGLE ORG FROM THE DATABASE
router.get('/:id', function (req, res) {
    Org.findById(req.params.id, function (err, org) {
        if (err) return res.status(500).send("There was a problem finding the org.");
        if (!org) return res.status(404).send("No org found.");
        res.status(200).send(org);
    });
});

// DELETES A ORG FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Org.findByIdAndRemove(req.params.id, function (err, org) {
        if (err) return res.status(500).send("There was a problem deleting the org.");
        res.status(200).send("Org: "+ org.name +" was deleted.");
    });
});

// UPDATES A SINGLE ORG IN THE DATABASE
router.put('/:id', function (req, res) {
    Org.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, org) {
        if (err) return res.status(500).send("There was a problem updating the org.");
        res.status(200).send(org);
    });
});


module.exports = router;