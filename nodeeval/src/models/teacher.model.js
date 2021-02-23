const db = require('./../../config/db.config');

const Teacher = function (teacher) {
    this.firstname = teacher.firstname;
    this.lastname = teacher.lastname;
};

Teacher.findAll = (result) => {
    db.query("Select * from teacher", (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(null, err);
        } else {
            console.log('teacher : ', res);
            result(null, res);
        }
    });
}

Teacher.findById = (id, result) => {
    db.query('Select * from teacher where Id_teacher = ?', id, (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(null, err);
        } else {
            console.log('teacher : ', res);
            result(null, res);
        }
    });
};

Teacher.findSubject = (id, result) => {

    const sql = "SELECT subject.name AS subject , teacher.lastname AS lastname, teacher.firstname AS firstname FROM subject, teacher_subject, teacher WHERE subject.Id_subject = teacher_subject.Id_subject AND teacher_subject.Id_teacher = teacher.Id_teacher AND teacher.Id_teacher = ?"
    db.query(sql, id, (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(null, err);
        } else {
            console.log('subject : ', res);
            result(null, res);
        }
    });
};


Teacher.create = (newTeacher, result) =>

{
    db.query('INSERT INTO teacher set ?', newTeacher, (err, res) => {
        if (err) {
            console.log("error")
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId)
        }
    });
}

module.exports = Teacher;