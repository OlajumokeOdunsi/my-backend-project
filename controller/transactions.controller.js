

// transaction history that shows transacrions for each person account 
// source account = account number of the person making request, 

// I'll have a table for  id 

// Afer a transaction has been made, we put it in transaction history
// A controller to get the transaction id, TIMESTAMP, AMOUNT INVOLVE SOURCEACCOUNT-> CAN BE OPTIONl, source MOUNT AN BE OPTIONAL, 
// RECIPENT ACCOUNT AND BALANCE 

const userTransactions = require("../model/transactions.model")
const User = require("../model/user.model")


//  First step transaction history that shows transacrions for each person account 

const findAUserTransac = async (req, res) => {
try {
    const{sourceaccount,amountsent, recipentaccount,recipentbalance} = req.body;
    const user =  await User.create({
        
        sourceaccount,
        amountsent,
        recipentaccount,
        recipentbalance
    
    })
}catch{

}
}




















// try {
//     const transaction = await sequelize.transaction();
//     const user = await User.findOne(..., { transaction });
//     await user.update(..., { transaction });
//     await transaction.commit();
//   } catch {
//     await transaction.rollback()
//   }
