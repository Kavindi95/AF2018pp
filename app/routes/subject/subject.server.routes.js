const express = require('express');
const router = express.Router();
const subject = require('../../models/Subject');

router.post('/insert', function (req,res) {
    const subjectObj = new subject(req.body);
    subjectObj.save().then(
        data => {
            return res.status(200).json(data);
        }
    ).catch(
        err => {
            return res.status(400).json(err);
        }
    )
});

router.get('/', function (req,res) {
    subject.find().then(
        data => {
            return res.status(200).json(data);
        }
    ).catch(
        err => {
            return res.status(400).json(err);
        }
    )
});

router.get('/find/:id', function (req,res) {
    subject.findById(req.params.id).then(
        data => {
            return res.status(200).json(data);
        }
    ).catch(
        err => {
            return res.status(400).json(err);
        }
    )
});
module.exports = router;