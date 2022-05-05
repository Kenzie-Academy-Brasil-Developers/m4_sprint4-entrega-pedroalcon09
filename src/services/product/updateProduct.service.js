import database from "../../database";

async function updateProductService(id, updateData) {
  try {
    //Select no item que vai ser alterado
    const product = await database.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );

    if (product.rows.length === 0) {
      throw new Error("ID does not exists in database");
    }

    const item = product.rows[0];
    //Fazer spread com o corpo da requisição
    const updatedProduct = { ...product.rows[0], ...updateData };

    const { name, price, category_id } = updatedProduct;

    //Fazer query de update
    const res = await database.query(
      "UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *",
      [name, price, category_id, id]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
}

export default updateProductService;
