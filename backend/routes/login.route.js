//Validate login perhaps?
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Login = require('../model/Login');

//Grabs all documnets
router.get('/', async (req, res) => {
    const data = await Login.find({});
    res.json(data);
});

module.exports = router;