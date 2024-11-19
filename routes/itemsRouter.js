const { Router } = require('express');
const itemsRouter = Router();
const itemsController = require('../controllers/itemsController');

itemsRouter.get("/items", itemsController.getItems);
itemsRouter.get("/addNewItems", itemsController.getAddNewItems);
itemsRouter.post("/addItem", itemsController.addItem);
itemsRouter.get("/:id/edit", itemsController.getItem);
itemsRouter.post("/:id/edit", )
module.exports = itemsRouter;
