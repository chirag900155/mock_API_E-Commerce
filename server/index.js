    const express = require('express');
    const dotenv = require('dotenv');
    const DB = require('./Database/connect.js')
    const Register = require('./router/Register.js')
    const Login = require('./router/Login.js')
    const addProduct = require('./router/ProductRoute.js')
    const allProducts = require('./router/AllProduct.js')
    const addProductInCart = require('./router/CartRoute.js')

    const app = express();

    dotenv.config();

    const PORT = process.env.PORT;

    const UserName = process.env.USERNAME
    const Password = process.env.PASSWORD

    DB(UserName, Password)

    app.use(express.json());

    app.use('/api', Register)

    app.use('/api', Login)

    app.use('/api', addProduct)

    app.use('/api', allProducts)

    app.use('/api', addProductInCart)

    app.listen(PORT, ()=>{
        console.log(`Server is running on port http://localhost:${PORT}`);
    })