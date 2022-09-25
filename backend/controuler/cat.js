const connection = require("../model/db");

const addCat = (req, res) => {
  console.log(req);
  const { Name, Breed, Description } = req.body;
  const query = "INSERT INTO cat (Name, Breed, Description) VALUES (?,?,?)";
  const data = [Name, Breed, Description];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, err });
    }
    res.status(200).json({ success: true, result });
  });
};

const deleteCat = (req, res) => {
  const { cat_id } = req.params;
  const data = [cat_id];
  const query = `UPDATE cat SET IS_DELETED =1 WHERE cat_id=?;`;
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, err });
    }
    res.status(200).json({ success: true, result });
  });
};

const updateCat = (req, res) => {
  const { Name, Breed, Description } = req.body;
  const { cat_id } = req.params;
  const data = [cat_id];
  const query = `select * from cat where cat_id=?`;
  connection.query(query, data, (err, result) => {
    if (result.length) {
      const Data = [
        Name || result[0].Name,
        Breed || result[0].Breed,
        Description || result[0].Description,
        cat_id,
      ];
      const query2 =
        "UPDATE cat SET Name=?, Breed=? ,Description=? where cat_id =?";
      connection.query(query2, Data, (err, result2) => {
        if (err) {
          return res.status(500).json({
            succses: false,
            err,
          });
        }
        res.status(203).json({
          succses: true,
          result2,
        });
      });
    }
  });
};

const getAll = (req, res) => {
  const query = `SELECT * FROM cat`;
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, err });
    }
    res.status(203).json({
      succses: true,
      result,
    });
  });
};

module.exports = { addCat, deleteCat, updateCat, getAll };
