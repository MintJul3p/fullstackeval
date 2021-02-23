const Student = require('./../models/student.model');



exports.create = (req, res) => {
    const newStudent = new Student(req.body);

    Student.create(newStudent, function(err, student) {
        if (err)
            res.send(err);
        res.json({error:false,message:"student added successfully!",data:student});
    });

};