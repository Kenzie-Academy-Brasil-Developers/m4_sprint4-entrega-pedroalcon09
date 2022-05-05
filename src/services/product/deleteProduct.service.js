import database from "../../database";

async function deleteProductService(id) {
  try {
    const deleteProduct = await database.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );

    if (deleteProduct.rows.length === 0) {
      throw new Error("This product does not exist");
    }

    const res = await database.query("DELETE FROM products WHERE id = $1", [
      id,
    ]);
    return deleteProduct.rows[0];
  } catch (err) {
    throw new Error(err);
  }
}

export default deleteProductService;
