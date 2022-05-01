import database from "../../database";

async function listOneProductService(id) {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
}

export default listOneProductService;
