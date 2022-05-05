import "dotenv/config";
import express from "express";
import { startDatabase } from "./database";
import categoriesRouter from "./routers/categories.routes";
import productsRouter from "./routers/products.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

export default app.listen(process.env.PORT || 3000, () => {
  startDatabase();
  console.log("Rodando na porta " + process.env.PORT || 3000);
});
