// put money to the balanve account number and amount


const User = require("../model/user.model")
const userDeposit =require ("./authorizationcontroller")

const depositMoney = async (req, res) => {

    try {
        const { accountnumber, deposit } = req.body
        const user = await User.findOne({
            where: { accountnumber }
        })
        const newBalance = user.balance + deposit;
        // console.log(user)
        if (user) {
            await User.update(
                // UPDATE USER BALANCE TO A PARTICULAR VALUE
                // UPDATE USER WHERE ACCOUNT NUMBER   IS THE ACCOUNT NUMBER IN OUR REQUEST.BODY
                { balance: newBalance },
                {
                    where: {
                        accountnumber: accountnumber,
                    }
                }
            )
           return res.status(200).send("funds added successfully")
        }
    }catch (err){
        return res.status(500).send({msg: "Error in sending funds", error:err,})
    }

}

//  to be able to send money, you should have money in your account first 
// secondly you shouldnt send more than what you have in your account

// you should be able to  send money from one account to another
// 

const Transfer = async(req, res) =>{

    // res.json({message: req.user})
    const userEmail = req.user.email
const userExists = await User.findOne({
    where: {
        email: userEmail
    }
})
if (userExists){
   res.json({user: userExists})
   

   
//    verify the user balance lets say 50000, 
//    send to another person peerson that exist on the Database, this is also updated  
//    then whwen we it send, the 5000 shoukd be deducted from the account,
//     while the 5000 should be credited in the other bpersons accoudt which meand this is updated

    // send money from one account to the other.Transfer check balance first
}
}





module.exports = { depositMoney, Transfer }
