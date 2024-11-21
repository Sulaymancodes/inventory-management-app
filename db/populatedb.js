#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
-- Drop existing tables if they exist (to avoid conflicts)
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS category;

-- Create category table
CREATE TABLE IF NOT EXISTS category (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Create items table
CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  category_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE
);

-- Insert categories
INSERT INTO category (name) VALUES
  ('Books'),
  ('Dairy'),
  ('Meat'),
  ('Frozen Foods'),
  ('Drinks'),
  ('Vegetables'),
  ('Snacks'),
  ('Electronics'),
  ('Clothing'),
  ('Toys');

-- Insert items
INSERT INTO items (category_id, name, description, price) VALUES
  (1, 'The Great Gatsby', 'Classic novel by F. Scott Fitzgerald', 10.99),
  (1, '1984', 'Dystopian novel by George Orwell', 8.49),
  (1, 'To Kill a Mockingbird', 'Novel by Harper Lee', 7.89),
  (2, 'Milk', 'Fresh full-cream milk', 2.50),
  (2, 'Cheese', 'Cheddar cheese block', 3.75),
  (2, 'Yogurt', 'Low-fat vanilla yogurt', 1.99),
  (3, 'Chicken Breast', 'Skinless, boneless chicken breast', 5.75),
  (3, 'Beef Steak', 'Grass-fed beef steak', 12.99),
  (3, 'Pork Chops', 'Tender pork chops', 8.49),
  (4, 'Ice Cream', 'Chocolate ice cream tub', 4.99),
  (4, 'Frozen Pizza', 'Pepperoni frozen pizza', 6.99),
  (4, 'Frozen Vegetables', 'Mixed vegetables pack', 2.49),
  (5, 'Coca-Cola', '1L Coca-Cola bottle', 1.25),
  (5, 'Orange Juice', 'Fresh orange juice', 3.49),
  (5, 'Coffee', 'Ground coffee beans', 7.99),
  (6, 'Carrots', 'Organic fresh carrots', 1.99),
  (6, 'Spinach', 'Fresh spinach leaves', 2.50),
  (6, 'Potatoes', 'Golden potatoes', 0.99),
  (7, 'Chips', 'Potato chips pack', 2.99),
  (7, 'Cookies', 'Chocolate chip cookies', 3.49),
  (7, 'Candy', 'Assorted candies', 1.99),
  (8, 'Laptop', '15-inch gaming laptop', 1200.00),
  (8, 'Smartphone', 'Latest Android smartphone', 699.99),
  (8, 'Headphones', 'Noise-canceling headphones', 199.99),
  (9, 'T-Shirt', 'Cotton T-shirt', 9.99),
  (9, 'Jeans', 'Blue denim jeans', 29.99),
  (9, 'Jacket', 'Winter jacket', 59.99),
  (10, 'Lego Set', 'Star Wars Lego set', 89.99),
  (10, 'Doll', 'Barbie doll', 15.99),
  (10, 'Action Figure', 'Superhero action figure', 19.99)
`;

async function main() {
  console.log("Seeding database...");
  const client = new Client({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/inventory_app`,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database seeding complete!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.end();
  }
}

main();