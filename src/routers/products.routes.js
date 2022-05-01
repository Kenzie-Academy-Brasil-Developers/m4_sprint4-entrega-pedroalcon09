import { Router } from "express";
import ProductsController from "../controllers/products.controller";

const router = Router();

router.post("", ProductsController.createNew);
router.get("", ProductsController.listAll);
router.get("/:id", ProductsController.listOne);
router.delete("/:id", ProductsController.delete);
router.get("/category/:categId", ProductsController.listByCategory);
router.patch("/:id", ProductsController.update);

export default router;
