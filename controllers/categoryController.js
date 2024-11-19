const db = require('../db/queries');

async function getCategories(req, res) {
    const categories = await db.getAllCategory();
    res.render("category", { categories: categories });
}

function getAddNewItems(req, res) {
    res.render("newCategoryForm");
}

async function addCategory(req, res) {
    try {
        const { categoryName } = req.body;
        await db.addCategory(categoryName);
        res.redirect("/category");
    } catch (err) {
        res.redirect("404page");
    }
}

module.exports = {
    getCategories,
    getAddNewItems,
    addCategory
}