import database from "../../database";

async function createCategoryService({ name }) {
  try {
    const res = await database.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING *",
      [name]
    );

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
}

export default createCategoryService;
