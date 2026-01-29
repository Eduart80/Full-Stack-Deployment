const Product = require('../models/Product')

async function seedProduct(req, res) {
  try {
    await Product.deleteMany({});
    await Product.create(
      {
        name: "Apple",
        description: "Red",
        price: 1.20,
        category: "Fruits",
        inStock: true,
        tags: "Grocery"
      },
      {
         name: "Banana",
        description: "Yellow",
        price: 2.10,
        category: "Fruits",
        inStock: true,
        tags: "Grocery"
      },
      {
         name: "Tomato",
        description: "Organic",
        price: 3.20,
        category: "Vegetable",
        inStock: true,
        tags: "Grocery"
      },
    );
    res.send("Database seeded.")
  } catch(error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}
module.exports = {seedProduct}