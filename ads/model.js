const Sequelize = require("sequelize");
const db = require("../db");
const Image = require("../images/model");

const Ad = db.define("ad", {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  price: Sequelize.DECIMAL,
});

Ad.hasMany(Image);

module.exports = Ad;
