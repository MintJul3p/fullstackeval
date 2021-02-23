const express = require('express');
const router = express.Router();
const teacherController = require('./../controllers/teacher.controller');

router.get('/', teacherController.findAll);
router.get('/:id', teacherController.findById);
router.get('/:id/subject', teacherController.findSubject);
router.post('/', teacherController.create);

module.exports = router;