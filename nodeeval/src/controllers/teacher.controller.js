const Teacher = require('./../models/teacher.model');

exports.findAll = (req, res) => {
    Teacher.findAll((err, teacher) => {
        console.log('controller')
        if (err) {
            res.status(500).send(err);
        }
        console.log('res', teacher);
        res.send(teacher);
    });
};

exports.findById = (req, res) => {
    Teacher.findById(req.params.id, (err, section) => {
        if (err) {
            res.send(err);
        }
        res.json(section);
    });
};

exports.findSubject = (req, res) => {
    Teacher.findSubject(req.params.id,(err, section) => {
        if (err) {
            res.send(err);
        }
        res.json(section);
    });
};

exports.create = (req, res) => {
    const newTeacher = new Teacher(req.body);

        Teacher.create(newTeacher, function(err, teacher) {
            if (err)
                res.send(err);
            res.json({error:false,message:"Teacher added successfully!",data:teacher});
        });

};


