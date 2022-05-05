import database from "../database";

async function checkCategoryNameMiddleware(req, res, next) {
  const { name } = req.body;

  try {
    const categ = await database.query(
      "SELECT * FROM categories WHERE name = $1",
      [name]
    );

    if (categ.rows.length > 0) {
      return res
        .status(400)
        .json({ message: "This category name already exists" });
    }

    next();
  } catch (err) {
    return res.status(400).json(err.message);
  }
}

export default checkCategoryNameMiddleware;
