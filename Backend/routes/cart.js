import express from "express";
import db from "../config/database.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

// Add to cart
router.post("/", authenticateToken, (req, res) => {
  const { product_id, quantity } = req.body;
  const user_id = req.user.id;

  db.query(
    "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?",
    [user_id, product_id, quantity, quantity],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Product added to cart" });
    }
  );
});

// Get user cart
router.get("/", authenticateToken, (req, res) => {
  db.query(
    "SELECT c.id, p.name, p.price, c.quantity FROM cart c JOIN products p ON c.product_id = p.id WHERE c.user_id = ?",
    [req.user.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});

export default router;
