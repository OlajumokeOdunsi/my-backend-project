const {Router} = require("express")
const{depositMoney, Transfer} = require("../controller/deposit.controller")
const{authorizeJWT} = require("../controller/authorizationcontroller")


const router = Router()
router.post("/deposit",  depositMoney)
router.post ("/transfer", authorizeJWT,  Transfer, )

module.exports= router



