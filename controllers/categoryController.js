function getItems(req, res) {
    res.render("category");
}
function getAddNewItems(req, res) {
    res.render("newCategoryForm");
}

module.exports = {
    getItems,
    getAddNewItems
}