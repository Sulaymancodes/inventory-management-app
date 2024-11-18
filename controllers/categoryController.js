const db = require('../db/queries');

async function getCategories(req, res) {
    const categories = await db.getAllCategory();
    res.render("category", { categories: categories });
}
function getAddNewItems(req, res) {
    res.render("newCategoryForm");
}

module.exports = {
    getCategories,
    getAddNewItems
}