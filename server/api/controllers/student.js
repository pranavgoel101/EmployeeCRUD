const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Student = require("../models/student");

exports.Student_signup = async(req, res, next) => {

  const email1 = await Student.findOne({email : req.body.email});
  if(email1){
    return res.status(404).json({
      msg: 'Student already exist'
    });

  }

  const student =new Student({
    _id: new mongoose.Types.ObjectId(),
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone,
    address: req.body.address,
    email: req.body.email,
    pass: req.body.pass
  });

  student.save().then((response)=> {
    res.status(200).json({msg: response});
  }).catch((error)=>{
    res.status(500).json({msg: error});
    });
  
};

exports.Student_display = async (req, res, next) => {
  
  const student = await Student.find({ });

  if(!student) {
    return res.status(404).json({
      msg: "Can not Display Students"
    });
  }
  else {
    return res.status(201).json({
      msg: "Display Students Done",
      student: student
    });
  }
};


exports.Student_delete = async (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" })
  
    const id=req.params.id;
  
    const student = await Student.deleteOne({_id:id });
  
    if(!student) {
      return res.status(404).json({
        msg: "Student not deleted"
      });
    }
    else {
      return res.status(201).json({
        msg: "Student deleted"
      });
    }
  

};

exports.Student_update = async (req, res, next) => {
  
  const studentUpdate = await Student.update({_id:req.body.id },{firstname:req.body.firstname , lastname:req.body.lastname , mobileno:req.body.mobileno ,email:req.body.email, username:req.body.username});

  if(!studentUpdate) {
    return res.status(404).json({
      msg: "Student not Updated"
    });
  }
  else {
    return res.status(201).json({
      msg: "Student Updated"
    });
  }
};
