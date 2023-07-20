const express = require('express');
const cartSchema = require('../Models/CartSchema');
const UserSchema = require('../Models/ProductSchema.js');
const Router = express.Router();

Router.post('/cart', async (req, res) => {
  try {
    const { productName } = req.body;

    if (!productName) {
      return res.status(400).json({ message: 'Product name is required' });
    }

    const product = await UserSchema.findOne({ productname: productName });

    if (!product) {
      return res.status(400).json({ message: 'Product not found' });
    }

    const cartItem = new cartSchema({
      productname: product.productname,
      price: product.price,
      quantity: product.quantity,
      category: product.category,
    });

    await cartItem.save();

    return res.status(200).json({ message: 'Product added successfully to the cart' });
  } catch (err) {
    return res.status(500).json({
      message: `Error: ${err.message}`,
    });
  }
});

module.exports = Router;
