import database from "../../database";

async function listProductsService() {
  try {
    const res = await database.query("SELECT * FROM products");

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
}

export default listProductsService;
