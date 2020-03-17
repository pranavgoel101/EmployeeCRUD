const express = require("express");
const router = express.Router();

const StudentController = require('../controllers/student');

router.post("/add", StudentController.Student_signup);

router.post("/delete", StudentController.Student_delete);

router.post("/update", StudentController.Student_forgetpassword);




module.exports = router;