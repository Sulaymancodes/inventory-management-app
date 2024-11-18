const db = require('../db/queries');

async function getItems(req, res) {
    const items = await db.getAllItems();
    console.log(items);
    res.render("items", {items: items});
}
function getAddNewItems(req, res) {
    res.render("newItemsForm");
}

module.exports = {
    getItems,
    getAddNewItems
}