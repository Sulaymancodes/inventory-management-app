const { Router } = require('express');
const categoryRouter = Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get("/categories", categoryController.getCategories);
categoryRouter.get("/addNewCategories", categoryController.getAddNewItems);
categoryRouter.post("/addCategory", categoryController.addCategory);
categoryRouter.get("/:id/delete", categoryController.deleteCategory);

module.exports = categoryRouter;
