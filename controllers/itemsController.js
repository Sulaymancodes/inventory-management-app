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


module.exports = {
    getItems,
    getAddNewItems,
    addItem
}