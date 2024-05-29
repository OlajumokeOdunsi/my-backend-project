const { Router } = require("express");
const {registerUser, signInUser}= require("../controller/user.controller")


const router = Router()
// Registration route
router.post('/sign-up', registerUser);


// Signin route
router.post('/sign-in', signInUser);

module.exports = router;

