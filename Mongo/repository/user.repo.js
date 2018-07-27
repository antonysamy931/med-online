const Promise = require('bluebird');
const path = require('path');
const User = require(path.join(__dirname,'../mongo-schema/user.schema'));
const Operation = require(path.join(__dirname, '../mongo-operation/operation'));
const logger = require(path.join(__dirname, '../../Helpers/Logger'));
const UserMapper = require(path.join(__dirname, '../../Mapper/user.model.mapper'));

module.exports = {
    GetUserByEmail: (email) => {
        return new Promise((resolve, reject) => {
            Operation.FindOne(User,
            ({'Email':email})).then((result) => {
                resolve(result);
            }, (error) =>{
                logger.Error(error);
                reject(error);
            });
        });
    },
    Create: (data) => {
        return new Promise((resolve, reject) => {            
            var UserModel = UserMapper.InsertUser(data);            
            Operation.Insert(UserModel).then((result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    },
    GetUserByPharma: (pharmaId) => {
        return new Promise((resolve, reject) => {
            Operation.FindAll(User, {"Pharma":pharmaId}).then((result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    }
}