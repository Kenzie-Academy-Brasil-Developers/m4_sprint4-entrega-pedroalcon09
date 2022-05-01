import database from "../../database";

async function listProductByCategoryService(categId) {
  try {
    const res = await database.query(
      "SELECT p.name, p.price, c.name AS category FROM products p JOIN categories c ON p.category_id = c.id WHERE c.id = $1",
      [categId]
    );
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
}

export default listProductByCategoryService;
