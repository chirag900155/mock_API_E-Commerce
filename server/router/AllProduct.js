const express = require('express');
const ProductSchema = require('../Models/ProductSchema.js')
const Router = express.Router()

Router.get('/allProducts', async (req, res)  => {
    try{
        const products =  await ProductSchema.find()
        res.status(200).json({ products });
    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

module.exports = Router;