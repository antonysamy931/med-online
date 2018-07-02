// const mongoose = require('mongoose');
// const path = require('path');
// const User = require(path.join(__dirname, '../mongo-schema/user.schema'));

const Promise = require('bluebird');

module.exports = {
    Insert: function(user){
        return new Promise(function(resolve, reject){
            user.save(function(err, user){
                if(err){
                    console.log(err);
                    reject(err);
                }else{
                    resolve(user);
                }
            });
        });        
    }
}