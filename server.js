const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const { readdirSync } = require("fs");

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
readdirSync("./routes").map((route) => {
  console.log("route", route);
  app.use("/api", require("./routes/" + route));
});

// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Servier is running on port ${port}`));
