function getItems(req, res) {
    res.render("items");
}
function getAddNewItems(req, res) {
    res.render("newItemsForm");
}

module.exports = {
    getItems,
    getAddNewItems
}