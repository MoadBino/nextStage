const express = require("express");
const connection = require("./model/db");

const catRouter = require("./routes/cat");

const app = express();
app.use(express.json())

app.use("/cat", catRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(PORT);
});
