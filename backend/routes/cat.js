const express = require("express");

const catRouter = express.Router();
const { addCat,deleteCat,updateCat,getAll} = require("../controuler/cat");

catRouter.get("/allCats", getAll);
catRouter.post("/addCat", addCat);
catRouter.put("/updateCat/:cat_id", updateCat);
catRouter.delete("/deleteCat/:cat_id", deleteCat);

module.exports = catRouter;
