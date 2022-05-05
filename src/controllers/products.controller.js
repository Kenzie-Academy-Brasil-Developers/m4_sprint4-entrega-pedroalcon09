import { v4 as uuidv4 } from "uuid";
import createProductService from "../services/product/createProduct.service";
import listProductsService from "../services/product/listProducts.service";
import listOneProductService from "../services/product/listOneProduct.service";
import deleteProductService from "../services/product/deleteProduct.service";
import listProductByCategoryService from "../services/product/listByCategory.service";
import updateProductService from "../services/product/updateProduct.service";

export default class ProductsController {
  static async createNew(req, res) {
    const id = uuidv4();
    const { name, price, category_id } = req.body;

    if (!name || !price) {
      return res
        .status(400)
        .json({ message: "Cannot create product without name and price" });
    }

    try {
      const newProduct = await createProductService(
        id,
        name,
        price,
        category_id
      );

      return res
        .status(201)
        .json({ message: "Product created", product: newProduct });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  static async listAll(req, res) {
    try {
      const everyProduct = await listProductsService();

      return res.status(200).json(everyProduct);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  static async listOne(req, res) {
    const { id } = req.params;

    try {
      const oneProduct = await listOneProductService(id);

      return res.status(200).json(oneProduct);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  static async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedProduct = await deleteProductService(id);

      return res
        .status(200)
        .json({ message: "Product deleted", product: deletedProduct });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  static async listByCategory(req, res) {
    const { categId } = req.params;
    try {
      const productsListed = await listProductByCategoryService(categId);

      return res.status(200).json(productsListed);
    } catch (err) {
      return res.status(400).json(productsListed);
    }
  }

  static async update(req, res) {
    const { id } = req.params;

    try {
      const updatedProduct = await updateProductService(id, req.body);

      return res
        .status(200)
        .json({ message: "Product updated", product: updatedProduct });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
