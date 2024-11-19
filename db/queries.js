const pool = require('./pool')

async function getAllItems() {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows;
}

async function getAllCategory() {
    const { rows } = await pool.query("SELECT * FROM category");
    return rows;
}

async function addItem(name, description, price, category) {
    await pool.query("INSERT INTO items VALUES")
}
module.exports = {
    getAllItems,
    getAllCategory
}