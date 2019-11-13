const { Router } = require("express");
const Ad = require("./model");
const Image = require("../images/model");

const router = new Router();

router.get("/ads", (_req, res, next) => {
  Ad.findAndCountAll({
    include: [Image]
  })
    .then(ads => res.json(ads))
    .catch(next)
});

module.exports = router;
