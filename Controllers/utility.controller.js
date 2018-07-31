var express = require('express');
var router = express.Router();
var path = require('path');
var Country = require(path.join(__dirname, '../Constants/Countries.json'));

router.get('/getallcountries', (req, res, next) => {    
    res.status(200).json(Country["countries"]);
});

module.exports = router;