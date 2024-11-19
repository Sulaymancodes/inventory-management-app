const pool = require('./pool')

async function getAllItems() {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows;
}

async function getAllCategory() {
    const { rows } = await pool.query("SELECT * FROM category");
    return rows;
}

async function addItem(category_id, name, description, price) {
    await pool.query("INSERT INTO items (category_id, name, description, price) VALUES ($1, $2, $3, $4)", [category_id, name, description, price]);
}
module.exports = {
    getAllItems,
    getAllCategory,
    addItem
}