const express = require("express");
const productRouter = require("./router/product.router");
const transactionRouter = require ("./router/deposit.router");
const userRouter = require("./router/user.router");
// cont transferRouter = require("./router/")
const app = express()
const mysql = require("mysql")
const PORT = 4000
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use("/products", productRouter)
app.use("/user", userRouter)
app.use("/transaction", transactionRouter)
// app.use("/transfer", )




app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
    // console.log()
})