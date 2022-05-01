import database from "../../database";

async function createProductService(id, name, price, category_id) {
  try {
    const res = await database.query(
      "INSERT INTO products(id, name, price, category_id) VALUES($1, $2, $3, $4) RETURNING *",
      [id, name, price, category_id]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
}

export default createProductService;
