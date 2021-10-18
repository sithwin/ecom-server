const express = require("express");

const router = express.Router();

router.get("/create-or-update-user", (req, res) => {
  res.json({
    data: "hit create or update user",
  });
});

module.exports = router;
