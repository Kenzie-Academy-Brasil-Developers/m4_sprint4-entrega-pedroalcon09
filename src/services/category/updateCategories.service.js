import database from "../../database";

async function updateCategoryService(id, name) {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
}

export default updateCategoryService;
