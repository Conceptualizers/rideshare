
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Admin = require('./Admin');

// CREATES A NEW ADMIN
router.post('/', function (req, res) {
    Admin.create({
            user_id : req.body.user_id,
            email : req.body.email,
        }, 
        function (err, admin) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(admin);
        });
});

// RETURNS ALL THE ADMINS IN THE DATABASE
router.get('/', function (req, res) {
    Admin.find({}, function (err, admins) {
        if (err) return res.status(500).send("There was a problem finding the admins.");
        res.status(200).send(admins);
    });
});

// GETS A SINGLE ADMIN FROM THE DATABASE
router.get('/:id', function (req, res) {
    Admin.findById(req.params.id, function (err, admin) {
        if (err) return res.status(500).send("There was a problem finding the admin.");
        if (!admin) return res.status(404).send("No admin found.");
        res.status(200).send(admin);
    });
});

// DELETES A ADMIN FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Admin.findByIdAndRemove(req.params.id, function (err, admin) {
        if (err) return res.status(500).send("There was a problem deleting the admin.");
        res.status(200).send("admin with user_id: "+ admin.user_id +" was deleted.");
    });
});

// UPDATES A SINGLE ADMIN IN THE DATABASE
router.put('/:id', function (req, res) {
    Admin.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, admin) {
        if (err) return res.status(500).send("There was a problem updating the admin.");
        res.status(200).send(admin);
    });
});


module.exports = router;