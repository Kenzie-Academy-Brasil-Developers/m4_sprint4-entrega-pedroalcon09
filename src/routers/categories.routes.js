import { Router } from "express";
import CategoriesController from "../controllers/categories.controller";

const router = Router();

router.post("", CategoriesController.createNew);
router.get("", CategoriesController.listAll);
router.get("/:id", CategoriesController.listOne);
router.patch("/:id", CategoriesController.update);
router.delete("/:id", CategoriesController.delete);

export default router;
