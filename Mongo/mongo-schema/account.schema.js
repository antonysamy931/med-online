const mongoose = require('mongoose');
const path = require('path');
const cryptosystem = require(path.join(__dirname, '../Helpers/crypto.system'));

var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    _id: Schema.Types.ObjectId,
    Username: {type: String, index: true},
    Password: {type: String},
    User: {type: Schema.Types.ObjectId, ref="User"},
    CreatedDate: {type: Date, default: new Date()},
    CreatedBy: {type: String},
    UpdatedDate: {type: Date, default: new Date()},
    UpdatedBy: {type: String}
});

AccountSchema.methods.SetPassword = function(password){
    this.Password = cryptosystem.Encryption(password);
}

var Account = mongoose.model('Account', AccountSchema);

module.exports = Account;