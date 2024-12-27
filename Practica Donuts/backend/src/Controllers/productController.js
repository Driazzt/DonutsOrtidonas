const productModel = require("../Models/productModel");

//! Crear un producto:    POST products/createProduct

const createProduct = async (req, res) => {
  try {
    const { nombre, tipo, precio, imagen } = req.body;
    const products = await productModel.create({
      nombre,
      tipo,
      precio,
      imagen,
    });

    res.status(200).json({ status: "Success", products: products });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

//! Obtener todos los productos:  GET /products

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    res.status(200).json({ products: products });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

//! Obtener un producto por ID:    GET /products/:idProduct

const getProductById = async (req, res) => {
  try {
    const { idProduct } = req.params;
    const productById = await productModel.findById(idProduct);

    if (!productById)
      return res
        .status(404)
        .json({ status: "Failed", error: "Can not find the product" });

    res.status(200).json({ status: "Success", products: productById });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

//! Editar un producto:   PATCH /products/:idProduct

const updateProductById = async (req, res) => {
  try {
    const { idProduct } = req.params;
    const update = req.body;

    const updateProduct = await productModel.findByIdAndUpdate(
      idProduct,
      update,
      {
        new: true,
      }
    );
    res.status(200).json({ status: "Success", products: updateProduct });
  } catch {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};
//! Eliminar un producto:   DELETE /products/:id

const deleteProductById = async (req, res) => {
  try {
    const { idProduct } = req.params;
    const deleteProduct = await productModel.findByIdAndDelete(idProduct);

    if (!deleteProduct)
      return res(404).json({
        status: "Failed",
        error: "Product does not exist",
      });
    res.status(200).json({ status: "Success", products: deleteProduct });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

//! Importaciones:

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
