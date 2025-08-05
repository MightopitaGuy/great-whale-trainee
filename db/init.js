const sqlite3 = require('sqlite3').verbose();
const { v4: uuidv4 } = require('uuid');

// Create database connection
const db = new sqlite3.Database('./db/products.db');

// Create products table
db.serialize(() => {
  // Drop table if exists
  db.run("DROP TABLE IF EXISTS products");
  
  // Create products table
  db.run(`
    CREATE TABLE products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      price REAL NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      image TEXT NOT NULL
    )
  `);

  // Sample products data
  const products = [
    {
      id: uuidv4(),
      name: "Laptop Gaming Pro",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 15999.99,
      image: "https://oztrbfpzldmpjlrgbely.supabase.co/storage/v1/object/public/segundo-recruting/laptop.png"
    },
    {
      id: uuidv4(),
      name: "Smartphone Ultra",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
      price: 8999.50,
      image: "https://oztrbfpzldmpjlrgbely.supabase.co/storage/v1/object/public/segundo-recruting/smartphone.png"
    },
    {
      id: uuidv4(),
      name: "Wireless Headphones",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      price: 2499.99,
      image: "https://oztrbfpzldmpjlrgbely.supabase.co/storage/v1/object/public/segundo-recruting/headphones.png"
    },
    {
      id: uuidv4(),
      name: "4K Smart TV",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
      price: 12999.00,
      image: "https://oztrbfpzldmpjlrgbely.supabase.co/storage/v1/object/public/segundo-recruting/tv.png"
    },
    {
      id: uuidv4(),
      name: "Gaming Console",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.",
      price: 7999.99,
      image: "https://oztrbfpzldmpjlrgbely.supabase.co/storage/v1/object/public/segundo-recruting/console.png"
    },
    {
      id: uuidv4(),
      name: "Tablet Pro",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
      price: 5499.75,
      image: "https://oztrbfpzldmpjlrgbely.supabase.co/storage/v1/object/public/segundo-recruting/ipad.png"
    },
    {
      id: uuidv4(),
      name: "Smart Watch",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor.",
      price: 3499.50,
      image: "https://oztrbfpzldmpjlrgbely.supabase.co/storage/v1/object/public/segundo-recruting/smartwatch.png"
    }
  ];

  // Insert products
  const stmt = db.prepare("INSERT INTO products (id, name, description, price, image) VALUES (?, ?, ?, ?, ?)");
  
  products.forEach(product => {
    stmt.run(product.id, product.name, product.description, product.price, product.image);
    console.log(`Inserted product: ${product.name} - $${product.price} MXN`);
  });
  
  stmt.finalize();
  
  console.log('\nDatabase initialized successfully!');
  console.log('Products table created with 7 sample products.');
  
  // Close database connection
  db.close();
}); 