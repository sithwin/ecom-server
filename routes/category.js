const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  read,
  update,
  remove,
  list,
} = require("../controllers/category");

// routes
router.get("/categories", list);
router.get("/categories/:slug", authCheck, read);
router.post("/categories", authCheck, adminCheck, create);
router.put("/categories/:slug", authCheck, adminCheck, update);
router.delete("/categories/:slug", authCheck, adminCheck, remove);

module.exports = router;
