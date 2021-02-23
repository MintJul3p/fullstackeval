const db = require("./../../config/db.config");

const Section = (section) => {
    this.name = section.name;
    this.level = section.level;
};

Section.findAll = (result) => {
    db.query("Select * from section", (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(null, err);
        } else {
            console.log('section : ', res);
            result(null, res);
        }
    });
};

Section.findById = (id, result) => {
    db.query('Select * from section where Id_section = ?', id, (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(null, err);
        } else {
            console.log('section : ', res);
            result(null, res);
        }
    });
};

Section.findStudents = (id, result) => {
    db.query('Select * from student where Id_section = ?', id, (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(null, err);
        } else {
            console.log('student : ', res);
            result(null, res);
        }
    });
};

module.exports = Section;