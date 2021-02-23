const express = require('express');
const router = express.Router();
const sectionController = require("../controllers/section.controller");

router.get('/', sectionController.findAll);
router.get('/:id', sectionController.findById);
router.get('/:id/student', sectionController.findStudents);

module.exports = router;