const connection = require("../model/db");
const addCat = (req, res) => {
  const { Name, Breed, Description } = req.body;
  const query = "INSERT INTO cat (Name, Breed, Description) VALUES (?,?,?)";
  const data = [Name, Breed, Description];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({ success: true, result });
  });
};



module.exports = {addCat}