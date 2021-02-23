const Section = require('../models/section.model');

exports.findAll = (req, res) => {
    Section.findAll((err, section) => {
        console.log('controller')
        if (err) {
            res.status(500).send(err);
        }
        console.log('res', section);
        res.send(section);
    });
};

exports.findById = (req, res) => {
    Section.findById(req.params.id, (err, section) => {
        if (err) {
            res.send(err);
        }
        res.json(section);
    });
};

exports.findStudents = (req, res) => {
    Section.findStudents(req.params.id, (err, students) => {
        if (err){
            res.send(err);
        }
        res.json(students);
    });
};