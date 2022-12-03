const express = require("express");
const phoneRouter = require("./phone.routes");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/phones", phoneRouter);

module.exports = router;
