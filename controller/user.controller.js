const User = require("../model/user.model")
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const registerUser = async (req, res) => {
    console.log(req.body)
    let randomNumber = getRandomNumber(1000000000, 9999999999);
    // console.log(randomNumber)

    try {
        const { firstname, lastname, password, email, } = req.body


        const userExists = await User.findOne({
            where: { email }
        });
        // console.log("hello")
        if (userExists) {
            // console.log("2")

            return res.status(400).send('Email is already associated with an account');
        };




        await User.create({
            firstname,
            lastname,
            email,
            password: await bcrypt.hash(password, 15),
            accountnumber: randomNumber,
            balance: 0

        })



        return res.status(200).send('Registration successful');
    } catch (err) {
        return res.status(500).send({ msg: 'Error in registering user', error: err, });
    }
}

// Authentication
const signInUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        const signin = await User.findOne({
            where: { email }
        });
        if (!signin) {
            return res.status(404).json("user not found")
        } else {

        }

        // verify password

        const passwordValid = await bcrypt.compare(password, signin.password);
        if (!passwordValid) {
            return res.status(404).json('incorrect email or password')
        }

        //Authenticate user with jwt
        const token = jwt.sign({ id: signin.id, email: signin.email }, "secret",
            //  {
            //     expiresIn:process.env.JWT_REFRESH_EXPIRATION

            // }
        )
        res.status(200).send({
            id: signin.id,
            firstname: signin.firstname,
            lastname: signin.lastname,
            email: signin.email,
            accessToken: token,
        })
    } catch (error) {
        return res.status(500).send({ msg: "error signin in", error: error })

    }
}


module.exports = { registerUser, signInUser }