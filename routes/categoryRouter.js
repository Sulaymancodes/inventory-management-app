const { Router } = require('express');
const categoryRouter = Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get("/categories", categoryController.getCategories);
categoryRouter.get("/addNewCategories", categoryController.getAddNewItems);

module.exports = categoryRouter;
