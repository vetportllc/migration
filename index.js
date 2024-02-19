require("dotenv").config();
const express = require("express");
const config = require("./config");
const {
  server: { PORT, environment },
  BASE_PATH,
} = config;

// Database
const { Database } = require("./utils");
Database.connectMongo();

//express instance
const app = express();

//middleware
app.use(express.json({ limit: "50mb" })); //body parser
app.get(BASE_PATH, (_, res) =>
  res.send(
    `Welcome to Migration ${environment} server on PORT : ${PORT} ...... Base path - ${BASE_PATH}`
  )
);
app.use(BASE_PATH, require("./routes/index"));
app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
