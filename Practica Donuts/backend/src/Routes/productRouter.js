const express = require("express");
const router = express.Router();

//! Todos los enrutados...

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../Controllers/productController");

//! Rutas
router.post("/createProduct", createProduct); //Funciona bien
router.get("/", getAllProducts); //Funciona bien
router.get("/:idProduct", getProductById); //Funciona bien
router.patch("/:idProduct", updateProductById); //Funciona bien
router.delete("/:idProduct", deleteProductById); // Funciona bien

module.exports = router;
