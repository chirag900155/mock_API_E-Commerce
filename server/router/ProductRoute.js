const express = require('express');
const ProductSchema = require('../Models/ProductSchema');
const Router = express.Router();

Router.post('/addProduct', async (req, res) =>{
    const product = req.body;

    if(!product){
        return res.status(400).json({
            message: 'Product is required.'
        })
    }

    try{
        const productschema = await ProductSchema.create(product)
        await productschema.save()
        return res.status(200).json({
            message: 'Product added successfully.'
        })
    }catch(err){
        return res.status(201).json({message: 'Product could not be added.'}); 
    }
})

module.exports = Router;
