const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_signup = (req, res, next) => {

  const user =new User({
    _id: new mongoose.Types.ObjectId(),
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone,
    address: req.body.address,
    email: req.body.email
  });

  user.save().then((response)=> {
    res.status(200).json({msg: response});
  }).catch((error)=>{
    res.status(500).json({msg: error});
    });
  
};

exports.user_login = (req, res, next) => {
  res.status(200).json({ msg: "user_login works" })
};

exports.user_delete = (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" })

};

exports.user_forgetpassword = (req, res, next) => {
  res.status(200).json({ msg: "forget_password works" })
};
