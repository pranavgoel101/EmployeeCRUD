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


exports.Student_delete = (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" })

};

exports.Student_forgetpassword = async (req, res, next) => {
  
  const user = await User.findOne({email : req.body.email});

  if(!user){
    return res.status(404).json({
      msg: 'User not found'
    });
  }
  const user1 = await User.update({email : req.body.email},{pass : req.body.pass});
  if(!user1){
    return res.status(404).json({
      msg: 'password reset unsuccessful'
    });
  }
  else{
    return res.status(201).json({
      msg: 'password reset successful'
    });
  }
  
  res.status(200).json({ msg: "forget_password works" })
};
exports.user_homepage = (req, res, next) => {
  res.status(200).json({ msg: "user_homepage works" })

};
