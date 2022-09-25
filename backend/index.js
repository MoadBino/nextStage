const express = require("express");
const cors = require("cors");
const connection = require("./model/db");
const catRouter = require("./routes/cat");
const app = express();
app.use(cors());
app.use(express.json())
app.use("/cat", catRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(PORT);
});
