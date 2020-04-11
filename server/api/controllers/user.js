const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_signup = async(req, res, next) => {

  const email1 = await User.findOne({email : req.body.email});
  if(email1){
    return res.status(404).json({
      msg: 'User already exist'
    });

  }

  const user =new User({
    _id: new mongoose.Types.ObjectId(),
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone,
    address: req.body.address,
    email: req.body.email,
    pass: req.body.pass
  });

  user.save().then((response)=> {
    let payload ={ subject: user._id}
    let token = jwt.sign(payload, 'secretkey')
    res.status(200).send({token})
    //res.status(200).json({msg: response});
  }).catch((error)=>{
    res.status(500).json({msg: error});
    });
  
};

exports.user_login = async (req, res, next) => {
console.log('req.body',req.body)

const user = await User.findOne({email : req.body.email , pass : req.body.pass});

if(!user){
  return res.status(404).json({
    msg: 'User not found'
  });
}
else{
  let payload = {subject : user._id}
  let token = jwt.sign(payload , 'secretkey')
  res.status(201).send({token})
  //return res.status(201).json({msg: 'User found'});
}
  res.status(200).json({ msg: "user_login works" })
};

exports.user_delete = (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" })

};

exports.user_forgetpassword = async (req, res, next) => {
  
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
