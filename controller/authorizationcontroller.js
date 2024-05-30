const jwt = require("jsonwebtoken");

const authorizeJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, "secret", (err, user) => {
            if (err) {
                console.log(err);
                return res.sendStatus(403);
            }
            console.log(user)
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
}
};

module.exports = {authorizeJWT}

//  to be able to send money, you should have money in your account first 
// secondly you shouldnt send more than what you have in your account

// you should be able to  send money from one account to another
// 


