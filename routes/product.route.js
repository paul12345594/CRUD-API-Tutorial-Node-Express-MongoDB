
const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js')

router.get('/', getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);   //update a product
router.delete("/:id", deleteProduct)  //delete a prodcus

module.exports = router;