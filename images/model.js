const Sequelize = require("sequelize");
const db = require("../db");

const Image = db.define("image", {
  url: Sequelize.TEXT,
});

module.exports = Image;
