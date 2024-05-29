const Product = require("./../model/product.model")
const getAllProduct = async (req, res) => {
    const products = await Product.findAll()
    res.status(200).json(products)
}

const getProductById = async (req, res) => {
    const id = req.params.id
    console.log(id);

    const product = await Product.findByPk(id)

    if (product) {
        res.status(200).json(product)
    } else {
        res.status(404).json({
            error: "not found",
            message: `product with id: ${id} not found`
        })

    }
}


const createProduct = async (req, res) =>{
    const requestCategory = req.body.category;
    const priceCategory = req.body.price;
    const nameCategory = req.body.name;
    const descriptionCategory = req.body.description;
    const imageCategory = req.body.image


    const productCategory  = await Product.create({ 
        category: requestCategory,
        price:priceCategory,
        name:nameCategory,
        description:descriptionCategory,
        image:imageCategory
    })
    res.status(200).json(productCategory)

}


const updateProduct = async (req, res) => {
    const id = req.params.id
    console.log(id)

    await Product.update(req.body, { where: { id: id } })
    const updatedProduct = await Product.findByPk(id)
    res.status(200).json(updatedProduct)
}


const deleteProduct = async (req, res) => {
    const id = req.params.id

    Product.destroy({ where: { id: id } })
    res.status(200).json("product is deleted successfully")

}
module.exports = { getAllProduct, getProductById, createProduct, updateProduct, deleteProduct }

