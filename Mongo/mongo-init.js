const mongoose = require('mongoose');
const path = require('path');
//Connect
const Connect = require(path.join(__dirname,'./mongo-connect'));
// Schemas import 
const User = require(path.join(__dirname,'./mongo-schema/user.schema'));
const Account = require(path.join(__dirname,'./mongo-schema/account.schema'));
//Operation import
const UserOperation = require(path.join(__dirname,'./mongo-operation/user.operation'));
const AccountOperation = require(path.join(__dirname,'./mongo-operation/account.operation'));
Connect.Connect();

var UserModel = new User({    
    _id: new mongoose.Types.ObjectId(),
    Name: { 
        First: "firstname",
        Last: "lastname"        
    },
    Age: 20,
    Dob: Date.parse("01/19/2018"),
    Email: "antonysamy931@gmail.com",    
    UserId: "test",
    Role: "admin"    
});

//console.log(UserModel);
UserOperation.Insert(UserModel).then(function(result){
    console.log(result);
})
//console.log(UserOperation.Insert(UserModel));