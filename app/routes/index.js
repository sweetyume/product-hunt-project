const express = require('express');

const router = express.Router();
const Product = require('../models/product');

// Get all products
router.get('/', (request, response) => {
  Product.find((error, products) => {
    if (error) {
      response.send(error);
    }
    response.render('products', { products });
  });
});

// Get a product information
router.get('/products/:id', (request, response) => {
  Product.findById(request.params.id, (error, product) => {
    if (error) {
      response.send(error);
    }
    response.render('product', { product });
  });
});
