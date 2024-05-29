const { Router } = require("express");
const { getAllProduct, getProductById, createProduct,updateProduct,deleteProduct } = require("../controller/product.controller");

const router = Router()

router.get("/", getAllProduct)
router.get("/:id/getproduct", getProductById)
router.post("/createproduct", createProduct)
router.put("/:id/updateproduct", updateProduct)
router.delete("/:id/deleteproduct", deleteProduct)


module.exports= router