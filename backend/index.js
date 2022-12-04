const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;
require("dotenv").config();
const cors = require("cors");

const jwtAuth = require("./middleware/jwtAuth");
app.get("/", jwtAuth, (req, res) => {
  res.status(200).send("guten tag herr");
});

const userRoutes = require("./routes/user.routes");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
//database connection
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mxtdupi.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then(() => console.log("Database connection established"))
  .catch((e) => console.error(e));

//route mid
app.use("/user", userRoutes);

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
