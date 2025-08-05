import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function GET() {
  try {
    // Open database connection
    const db = await open({
      filename: './db/products.db',
      driver: sqlite3.Database
    });

    // Query all products
    const products = await db.all('SELECT * FROM products ORDER BY created_at DESC');
    
    // Close database connection
    await db.close();

    // Return products as JSON
    return NextResponse.json({
      success: true,
      data: products,
      count: products.length
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch products' 
      },
      { status: 500 }
    );
  }
} 