const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.post("/forgetpassword", UserController.user_forgetpassword);

router.post("/homepage",verifyToken, UserController.user_homepage);


module.exports = router;

function verifyToken(req , res , next) {
    if (!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretkey')
    if(!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.email = payload.subject
    next()
}