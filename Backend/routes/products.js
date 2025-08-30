import express from "express";
import db from "../config/database.js";

const router = express.Router();

// Get all products (with optional category filter)
router.get("/", (req, res) => {
  const { category } = req.query;
  let query = "SELECT * FROM products";
  let params = [];

  if (category) {
    query += " WHERE category = ?";
    params.push(category);
  }

  db.query(query, params, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

export default router;
