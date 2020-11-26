const router = require("express").Router();
const {
  findCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  findRecipesFromCategory
} = require("../controllers/categories-controller");

router.route("/").get(findCategories).post(createCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);


module.exports = router;
