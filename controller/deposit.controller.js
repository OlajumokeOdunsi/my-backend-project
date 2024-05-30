// put money to the balanve account number and amount



const   Transaction  = require("../model/transactions.model");
const User = require("../model/user.model")
const userDeposit =require ("./authorizationcontroller")

const depositMoney = async (req, res) => {

    try {
        const { accountnumber, deposit} = req.body;
        const user = await User.findOne({
            where: { accountnumber }
        })
        const newBalance = user.balance + deposit;
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

    
    const {amount, recipientAcc} = req.body;

    const user = await User.findOne({
        where: {
            email: req.user.email
        }
    });

    const recipient = await User.findOne({
        where: {
            accountnumber: recipientAcc
        }
    });
    if (!user) return res.status(400).send({Error: "Account Not Found!"})
    
    if (!recipient) return res.status(400).send({Error: "Recipient Account Not Found!"})

    if (user.balance < amount ) return res.status(400).send({Error: "Barawo!"})

    
    try {
        const newBalance = user.balance - amount;

        await User.update(
            {balance:newBalance},{  where: {
                email: req.user.email
            }}
            
        ); 
        console.log(recipient)
console.log(user)


        try {
            const recipientNewbalance = recipient.balance + amount;

            await recipient.update(
                { balance: recipientNewbalance },{  where: {
                    accountnumber: req.recipientAcc
                }}
            );

            await Transaction.create({
                amountsent:amount,
                sourceaccount:user.accountnumber,
                recipentaccount: recipientAcc,
                recipentbalance: recipientNewbalance

            }
        ) 
            return res.status(200).send("funds sent successfully")
                
        } catch(e){
            return res.status(400).send({Error: e.message})
        }
    } catch(e){
        return res.status(400).send({Error: e.message})
    }
}
    
// Transaction entry


module.exports = { depositMoney, Transfer}


// transaction history that shows transacrions for each person account 
// source account = account number of the person making request, 

// I'll have a table for  id 

// Afer a transaction has been made, we put it in transaction history
// A controller to get the transaction id, TIMESTAMP, AMOUNT INVOLVE SOURCEACCOUNT-> CAN BE OPTIONl, source MOUNT AN BE OPTIONAL, 
// RECIPENT ACCOUNT AND BALANCE 

