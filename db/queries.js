const pool = require('./pool')

async function getAllItems() {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows;
}

async function getItem(id) {
    const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
    return rows;
}


async function addItem(category_id, name, description, price) {
    await pool.query("INSERT INTO items (category_id, name, description, price) VALUES ($1, $2, $3, $4)", [category_id, name, description, price]);
}

async function updateItem(category_id, name, description, price, id) {
    await pool.query("UPDATE items SET category_id = $1, name = $2, description = $3, price = $4 WHERE id = $5", [category_id, name, description, price, id]);
}

async function addCategory(name) {
    await pool.query("INSERT INTO category (name) VALUES ($1)", [name])
}

async function getAllCategory() {
    const { rows } = await pool.query("SELECT * FROM category");
    return rows;
}




module.exports = {
    getAllItems,
    addItem,
    getItem,
    updateItem,
    getAllCategory,
    addCategory,
}