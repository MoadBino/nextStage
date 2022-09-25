const express = require("express");

const catRouter = express.Router();
const { addCat } = require("../controuler/cat");

catRouter.post("/", addCat);

module.exports = catRouter;
