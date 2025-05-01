const express = require('express')
const  router = express.Router()
const AssessmentController = require("../controllers/AssessmentController")

router.post('/add-assessment', AssessmentController.createAssessment)
router.get('/allassessment', AssessmentController.getAllAssessments);
router.get('/:id', AssessmentController.getAssessmentById);
router.put('/:id', AssessmentController.updateAssessment);
router.delete('/:id', AssessmentController.deleteAssessment);


module.exports = router