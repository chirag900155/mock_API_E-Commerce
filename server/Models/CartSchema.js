const mongoose = require('mongoose');

const cartSchema =  mongoose.Schema({
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

const Cart = mongoose.model('Cart',cartSchema);

module.exports = Cart;