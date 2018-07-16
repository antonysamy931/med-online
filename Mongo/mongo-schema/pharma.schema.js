const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PharmaSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId},
    Name: {type: String, required: true, index: true},
    Description: {type: String, required: true},
    Address: {type: Schema.Types.ObjectId, ref: 'Address'},
    CreatedDate: {type: Date, default: new Date()},
    CreatedBy: {type: String},
    UpdatedDate: {type: Date},
    UpdatedBy: {type: String}
})

PharmaSchema.pre('findOneAndUpdate', function(){
    this.UpdatedDate = new Date();
})

var Pharma = mongoose.model('Pharma', PharmaSchema);

module.exports = Pharma;