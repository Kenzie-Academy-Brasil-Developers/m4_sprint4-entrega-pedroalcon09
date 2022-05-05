import database from "../../database";

async function deleteCategoryService(id) {
  try {
    const deleteData = await database.query(
      "SELECT * FROM categories WHERE id = $1",
      [id]
    );
    if (deleteData.rows.length === 0) {
      throw new Error("This category does not exist");
    }
    const res = await database.query(
      "DELETE FROM categories WHERE id = $1 RETURNING *",
      [id]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
}

export default deleteCategoryService;
