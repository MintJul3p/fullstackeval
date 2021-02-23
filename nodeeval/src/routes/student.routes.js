const express = require('express');
const router = express.Router();
const studentController = require("../controllers/student.controller");

router.post('/', studentController.create);


module.exports = router;