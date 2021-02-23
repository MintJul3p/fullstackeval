const db = require('./../../config/db.config');

const Student = function (student) {
    this.firstname = student.firstname;
    this.lastname = student.lastname;
    this.Id_section = student.Id_section;
};

Student.create = (newStudent, result) =>

{
    db.query('INSERT INTO student set ?', newStudent, (err, res) => {
        if (err) {
            console.log("error")
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId)
        }
    });
}

module.exports = Student;