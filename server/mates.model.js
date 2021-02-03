const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Mate = new Schema({
    _id: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    mobile: {
        type: String
    },
    password: {
        type:  String
    },
    interests: [{
        type: String
    }]
});

module.exports = mongoose.model('Mate', Mate);