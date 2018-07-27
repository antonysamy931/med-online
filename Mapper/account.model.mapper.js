var mongoose = require('mongoose');
var path = require('path');
var Crypto = require(path.join(__dirname, '../Helpers/crypto.system'));
var Account = require(path.join(__dirname, '../Mongo/mongo-schema/account.schema'));
module.exports = {
    InsertAccountModel : (data, _id) => {
        var AccountModel = new Account({
            _id: new mongoose.Types.ObjectId,
            Username: data.Username,
            Password: Crypto.Encryption(data.Password),
            User: _id
        });
        return AccountModel;
    }
}