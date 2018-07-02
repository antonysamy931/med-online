const mongoose = require('mongoose');
const path = require('path');
const ApplicationSetting = require(path.join(__dirname, '../application-setting'));
var mongoserver = ApplicationSetting["mongo-server"];
var database = ApplicationSetting["med-database"];

module.exports = {
    Connect: async function(){
        try{
            console.log(mongoserver+database);
            await mongoose.connect(mongoserver+database);
        }
        catch(err){
            console.log(err);
        }
    }
};