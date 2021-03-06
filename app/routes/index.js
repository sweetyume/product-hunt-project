const express = require('express');

const path = require('path');

const router = express.Router();
const Product = require('../models/product');
const multer = require('multer');

// where and how the files/images should be saved.
const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, path.resolve('app', 'public', 'uploads'));
  },
  filename: (request, file, callback) => {
    callback(null, `${file.originalname}.split('.')[1]`);
  },
});
const upload = multer({ storage });

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

// Add a product

router.get('/add', (request, response) => {
  response.render('add_product');
});

router.post('/add', upload.single('imageLogo'), (request, response) => {
  const product = new Product(request.body);
  product.imageLogo = `/${request.file.destination.split('/').pop()}/${request.file.filename}`;
  product.save((error) => {
    if (error) {
      response.send(error);
    }
    response.redirect('/');
  });
  console.log(product.imageLogo);
});


// Edit a product
router.get('/edit/:id', (request, response) => {
  Product.findById(request.params.id, (error, product) => {
    if (error) {
      response.send(error);
    }
    response.render('edit_product', { product });
  });
});

router.post('/edit/:id', (request, response) => {
  Product.findByIdAndUpdate(request.params.id, request.body, (error) => {
    if (error) {
      response.send(error);
    }
    response.redirect('/');
  });
});

// Delete a product// delete a product
router.get('/remove/:id', (request, response) => {
  Product.findByIdAndRemove(request.params.id, (error) => {
    if (error) {
      response.send(error);
    }
    response.redirect('/');
  });
});
module.exports = router;
