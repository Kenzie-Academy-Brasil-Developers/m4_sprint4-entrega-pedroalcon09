import createCategoryService from "../services/category/createCategory.service";
import listCategoriesService from "../services/category/listCategories.service";
import listOneCategoryService from "../services/category/listOneCategory.service";
import updateCategoryService from "../services/category/updateCategories.service";
import deleteCategoryService from "../services/category/deleteCategory.service";

export default class CategoriesController {
  static async createNew(req, res) {
    const { name } = req.body;
    try {
      const newCategory = await createCategoryService({ name });
      return res
        .status(201)
        .json({ message: "Category created", category: newCategory });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  static async listAll(req, res) {
    try {
      const everyCategory = await listCategoriesService();

      return res.status(200).json(everyCategory);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  static async listOne(req, res) {
    const { id } = req.params;
    try {
      const category = await listOneCategoryService({ id });

      return res.status(200).json(category);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const updatedCategory = await updateCategoryService(id, name);
      return res
        .status(200)
        .json({ message: "Category updated", category: updatedCategory });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedCategory = await deleteCategoryService(id);
      return res
        .status(200)
        .json({ message: "Category deleted", category: deletedCategory });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
