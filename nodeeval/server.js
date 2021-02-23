const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//section router :
const sectionRoutes = require('./src/routes/section.routes');
app.use('/section', sectionRoutes);

//teacher router :
const teacherRoutes = require('./src/routes/teacher.routes');
app.use('/teacher', teacherRoutes);

//student router :

const studentRoutes = require('./src/routes/student.routes');
app.use('/student', studentRoutes);

app.listen(port, () => {
    console.log(`listening on  ${port}`);
});