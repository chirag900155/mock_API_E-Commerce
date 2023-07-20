const mongoose = require('mongoose');

const ProductSchema =  mongoose.Schema({
        productname:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        category:{
            type:String,
            required:true
        }
    })

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;