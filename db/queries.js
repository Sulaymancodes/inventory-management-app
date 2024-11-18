const pool = require('./pool')

async function getAllItems() {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows;
}

async function getAllCategory() {
    const { rows } = await pool.query("SELECT * FROM category");
    return rows;
}

module.exports = {
    getAllItems,
    getAllCategory
}