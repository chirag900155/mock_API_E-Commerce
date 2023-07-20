const express = require('express');
const AccountSchema = require('../Models/AccountSchema.js')

const Router = express.Router()

Router.post('/register', async (req, res)=>{
    const user = req.body;

    if(!user){
        return res.status(400).json({message: 'Please provide a all the required fields'})
    }

    try {
        const account = await AccountSchema.create(user);
        await account.save();
        return res.status(201).json("account successfully registered");
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
});

module.exports = Router