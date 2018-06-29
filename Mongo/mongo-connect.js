const mongoose = require('mongoose');
const path = require('path');
const ApplicationSetting = require(path.join(__dirname, '../application-setting'));
var mongoserver = ApplicationSetting["mongo-server"];
var database = ApplicationSetting["med-database"];

module.exports = {
    Connect: function(){
        mongoose.connect(mongoserver+database);
    }
};