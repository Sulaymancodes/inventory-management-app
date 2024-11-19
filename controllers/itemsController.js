const db = require('../db/queries');

async function getItems(req, res) {
    const items = await db.getAllItems();
    res.render("items", {items: items});
}
async function getAddNewItems(req, res) {
    const categories = await db.getAllCategory()
    res.render("newItemsForm", {categories: categories});
}

module.exports = {
    getItems,
    getAddNewItems
}