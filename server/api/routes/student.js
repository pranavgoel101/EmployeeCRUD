const express = require("express");
const router = express.Router();

const StudentController = require('../controllers/student');

router.post("/add", StudentController.Student_signup);

router.get("/displayall", StudentController.Student_display);

router.delete("/delete", StudentController.Student_delete);

router.post("/update", StudentController.Student_update);

module.exports = router;