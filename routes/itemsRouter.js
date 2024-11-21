const { Router } = require('express');
const itemsRouter = Router();
const itemsController = require('../controllers/itemsController');

itemsRouter.get("/items", itemsController.getItems);
itemsRouter.get("/addNewItems", itemsController.getAddNewItems);
itemsRouter.post("/addItem", itemsController.addItem);
itemsRouter.get("/:id/edit", itemsController.getItem);
itemsRouter.get("/:id/deleteItem", itemsController.deleteItem);
itemsRouter.post("/:id/edit", itemsController.updateItem);
itemsRouter.post("/searchedItems", itemsController.searchItem);

module.exports = itemsRouter;
