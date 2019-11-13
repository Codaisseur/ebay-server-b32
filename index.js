const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// routers
const ads = require("./ads/router");

const app = express();
const port = process.env.PORT || 4000;

require("./seeds");

app
  // middlewares come first!
  // .use(cors())
  // .use(bodyParser.json())

  .use(ads)

  .get("/", (_req, res) => res.send("hello world"))
  .listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });
