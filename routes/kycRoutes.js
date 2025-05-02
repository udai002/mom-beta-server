const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const { KycDocumentsAdd,getKycById,getKyc } = require('../controllers/deliveryBoyKycDocument');


const fileUpload = upload.fields([
    { name: 'AdharPhoto', maxCount: 1 },
    { name: 'DrivingLicencePhoto', maxCount: 1 },
    { name: 'RCPhoto', maxCount: 1 },
    { name: 'PANPhoto', maxCount: 1 }
]);

router.post('/kyc', fileUpload, KycDocumentsAdd);
router.get('/kyc/:id',getKycById)
router.get('/allkyc',getKyc)

module.exports = router;
