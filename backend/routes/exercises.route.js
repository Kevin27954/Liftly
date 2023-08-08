//Grabs the workout list for the user to look at.
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Exercise = require('../model/Exercise')

router.get('/', async (req, res) => {
    const data = await Exercise.find({});
    res.json(data)
});

module.exports = router;