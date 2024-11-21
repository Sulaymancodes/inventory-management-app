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

async function deleteCategory(req, res) {
    try {
        const id = req.params.id;
        await db.deleteCategory(id);
        res.redirect("/categories")
    } catch (err) {
        res.render("404page");
    }
}

module.exports = {
    getCategories,
    getAddNewItems,
    addCategory,
    deleteCategory
}