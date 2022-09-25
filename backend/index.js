const express = require("express");
const connection = require("./model/db");

const catRouter = require("./routes/cat");

const app = express();

app.use("/role", catRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(PORT);
});
