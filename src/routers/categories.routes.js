import { Router } from "express";
import CategoriesController from "../controllers/categories.controller";
import checkCategoryNameMiddleware from "../middlewares/checkCategoryName.middleware";

const router = Router();

router.post("", checkCategoryNameMiddleware, CategoriesController.createNew);
router.get("", CategoriesController.listAll);
router.get("/:id", CategoriesController.listOne);
router.patch("/:id", CategoriesController.update);
router.delete("/:id", CategoriesController.delete);

export default router;
