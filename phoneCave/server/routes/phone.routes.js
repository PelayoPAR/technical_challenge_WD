const express = require("express");
const phoneRouter = express.Router();
const allPhones = require("../data/phones.json");

phoneRouter.get("/", (req, res) => {
  //   res.json("phones are acoming");
  res.json(allPhones);
});

phoneRouter.get("/:phoneId", (req, res) => {
  const { phoneId } = req.params;
  const phoneSelected = allPhones.filter((phone) => {
    // console.log(phone.id);
    return phone.id == phoneId;
  });
  res.json(phoneSelected[0]);
  //   res.json(phoneId);
});

module.exports = phoneRouter;
