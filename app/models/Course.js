const mongoose =  require('mongoose');
const Subject = require('./Subject');

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    passMark: {
        type: String,
        required: true
    },
    passMark: {
        type: String,
        required: true
    },
    lecIncharge: {
        type: String
    },
    Subject: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }]
})

module.exports = mongoose.model('Courses', courseSchema);