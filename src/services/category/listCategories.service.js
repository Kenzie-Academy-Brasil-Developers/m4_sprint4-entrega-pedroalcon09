import database from "../../database";

async function listCategoriesService() {
  try {
    const res = await database.query("SELECT * FROM categories");

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
}

export default listCategoriesService;
