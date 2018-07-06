//const mongoose = require('mongoose');
const path = require('path');
//Connect
//const Connect = require(path.join(__dirname,'./mongo-connect'));
// Schemas import 
//const Account = require(path.join(__dirname,'./mongo-schema/account.schema'));
//const User = require(path.join(__dirname,'./mongo-schema/user.schema'));

//Operation import
//const Operation = require(path.join(__dirname,'./mongo-operation/operation'));

//Dump data
const Dump = require(path.join(__dirname,'./dump/initial-data'));

//Logger import
//const logger = require(path.join(__dirname,'../Helpers/Logger'));

//Connect.Connect();
//Dump.Initialize();

const AccountRepo = require(path.join(__dirname, './repository/account.repo'));
const UserRepo = require(path.join(__dirname,'./repository/user.repo'));

module.exports = {
    Account: AccountRepo,
    User: UserRepo
};

/*AccountRepo.ValidateUser("medadmin","Pa$$word").then(function(result){
    console.log(result);
})*/


//logger.Error("error test");
//logger.Warning("Wornig test");

/*var UserModel = new User({    
    _id: new mongoose.Types.ObjectId(),
    Name: { 
        First: "firstname",
        Last: "lastname"        
    },
    Age: 20,
    Dob: "01/19/2018",
    Email: "antonysamy931@gmail.com",    
    UserId: "test",
    Role: "admin"    
});

var account = new Account({
    _id: new mongoose.Types.ObjectId,
    UserName: "test",
    Password: "test",
    User: UserModel._id    
})*/

//console.log(UserModel);
/*Operation.Insert(UserModel).then(function(result){
    Operation.Insert(account).then(function(r){
        console.log(r);
    },function(e){
        console.log(e);
    })
}, function(error){
    console.log(error);
})*/
//console.log(UserOperation.Insert(UserModel));

/*Operation.FindOne(User, ({"Name.First": "firstname", "Age": {$lt: 15}})).then((result) => { 
    console.log(result);
}, (error) => {
    console.log(error);
})*/

/*Operation.UpdateOne(User, ({_id:"5b3b137118777e26bc90f996"}),{"Name.First":"first","UpdatedDate": new Date()}).then((result) => {
    console.log(result);
},(error) => {
    console.log(error);
});*/

/*Operation.DeleteOne(User, ({_id: "5b3b137118777e26bc90f996"})).then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
});*/