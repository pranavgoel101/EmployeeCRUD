const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fname: { type: String, required: true, },
    lname: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required : true},
});

module.exports = mongoose.model('Student1', studentSchema);