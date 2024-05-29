const Product = require("../model/product.model");

const seedProducts = async () => {
    const products = [
        {
            name: "Green T-Shirt",
            description: "Not really fine like that",
            category: "clothe",
            price: 90,
            image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/8852111/1.jpg?0416"
        }
    ];

    const productPromise = products.map(async product => {
        return await Product.create(product)
    });

    await Promise.all(productPromise)
}

seedProducts().then(() => {
    console.log("Products seeded successfully");
    process.exit(0)
}).catch(() => {
    console.error("Error seeding products");
    process.exit(1)
})