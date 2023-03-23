//Libraries
const express = require("express");
const cors = require("cors");

// Router
const router = express.Router();

const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");

  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
};

async function main() {
  const app = express();
  app.use(cors());
  app.use(allowCrossDomain);
  app.use(router);

  router.use("/", require("./routes"));

  app.listen(process.env.PORT, async () => {
    console.log("Environment: \x1b[44m%s\x1b[0m", process.env.ENVIRONMENT);
    console.log(`Running in port: ${process.env.PORT} - \x1b[42m%s\x1b[0m`, "Online");
  });
}

main();
