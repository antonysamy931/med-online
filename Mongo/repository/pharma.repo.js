const Promise = require('bluebird');
const path = require('path');
const Pharma = require(path.join(__dirname,'../mongo-schema/pharma.schema'));
const Address = require(path.join(__dirname,'../mongo-schema/address.schema'));
const Operation = require(path.join(__dirname, '../mongo-operation/operation'));
const logger = require(path.join(__dirname, '../../Helpers/Logger'));

module.exports = {
    GetPharmas: () => {
        return new Promise((resolve, reject) => {
            Operation.FindAll(Pharma, {}).then((result) => {
                resolve(result);
            },(error) => {
                logger.Error(error);
                reject(error);
            });
        });
    },
    CreatePharma: (data) => {
        return new Promise((resolve, reject) => {
            
        });
    }
}