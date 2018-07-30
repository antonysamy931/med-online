const mongoose = require('mongoose');
const path = require('path');
const Guid = require(path.join(__dirname,'../Helpers/GuidBuilder'));
const User = require(path.join(__dirname,'../Mongo/mongo-schema/user.schema'));

module.exports = {
    InsertUser : (data) => {        
        var UserModel = new User({
            _id: new mongoose.Types.ObjectId,
            Name: { 
                First: data.FirstName,
                Last: data.LastName,  
                Middle: data.MiddleName,
                Family: data.FamilyName      
            },
            Email: data.Email, 
            Dob: data.DOB,   
            Phone: {
                Personal: data.PersonalNumber,
                Home: data.HomeNumber,
                Office: data.OfficeNumber
            },            
            UserId: Guid.UserId(),
            Role: data.Role,
            CreatedBy: data.CreatedBy,
            CreatedDate: new Date(),
            Pharma: data.Pharma
        });
        return UserModel;
    }
}