const express = require('express');
const donarControllers=require("../controllers/donar.controllers");
const router = express.Router();

//get, delete, put/patch, register

router.post('/donar/register',donarControllers.createDonar);
router.put('/donar/edit/:id',donarControllers.editDonar);
router.get('/donar',donarControllers.getDonar);
router.delete('/donar/delete/:id',donarControllers.deleteDonar);

module.exports = router;