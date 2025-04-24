const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const { addPrescription, deletePrescription } = require('../controllers/prescriptionController');

router.post('/add', upload.single('image'), addPrescription);
router.delete('/delete/:id', deletePrescription);

module.exports = router;
