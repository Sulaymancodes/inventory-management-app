const db = require('../db/queries');

async function getItems(req, res) {
    const items = await db.getAllItems();
    res.render("items", {items: items});
}
async function getAddNewItems(req, res) {
    const categories = await db.getAllCategory()
    res.render("newItemsForm", {categories: categories});
}

async function addItem(req, res) {
    try {
        const { itemName, description, price, categoryId } = req.body;
        await db.addItem(categoryId, itemName, description, price);
        res.redirect('/items');
    } catch (err) {
        res.render("404page");
    }
}

async function getItem(req, res) {
    try {
        const itemId = req.params.id;
        const categories = await db.getAllCategory()
        const items = await db.getItem(itemId);
        const item = items[0]
        if (!item) {
            res.render("404page");
        }
        res.render("updateItem", {item: item, categories: categories});
    } catch (err) {
        res.render("404page");
    }
}

async function updateItem(req, res) {
    try {
        const id = req.params.id;
        const { itemName, description, price, categoryId } = req.body;
        await db.updateItem(categoryId, itemName, description, price, id);
        res.redirect("/items")
    } catch (err) {
        res.render("404page");
    }
}

async function searchItem(req, res) {
    try {
        const { searchedItem } = req.body;
        const items = await db.searchedItem(searchedItem);
        res.render("items", {items:items})
    } catch (err) {
        console.log(err)
        res.render("404page");
    } 
}

async function deleteItem(req, res) {
    try {
        const id = req.params.id;
        await db.deleteItem(id);
        res.redirect("/items");
    } catch (err) {
        res.render("404page");
    }
}

module.exports = {
    getItems,
    getAddNewItems,
    addItem,
    getItem,
    updateItem,
    searchItem,
    deleteItem
}