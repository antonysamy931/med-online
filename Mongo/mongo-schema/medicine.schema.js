const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MedicineSchema = new Schema({
    //_id: { type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId },
    Name: {type: String, require: true},
    Quantity: {type: String, required: true},
    Type: {type: String},
    PackageUnit: {type: String},
    PricePerUnit: {type: String}
});

MedicineSchema.index({Name: "text"});

var Medicine = mongoose.model("Medicine", MedicineSchema);

module.exports = Medicine;