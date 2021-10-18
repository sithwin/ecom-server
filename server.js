const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(`DB Connection ERROR ${err}`));

// middlewares
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(cors());

// route
app.get("/api", (req, res) => {
  res.json({
    data: "Hit node api new upgrade",
  });
});

// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Servier is running on port ${port}`));
