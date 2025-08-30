import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",        // directly string
  user: "root",             // your MySQL username
  password: "Nibedita@0308", // your MySQL password
  database: "ecommerce",     // your database name
  multipleStatements: true
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

export default db;
