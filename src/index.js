require("dotenv").config();
const Mexc = require("../dist/js/package");
const express = require("express");
var cors = require("cors");
const app = express();

app.get("/all-tokens", cors(), (req, res, next) => {
  console.log("...proceeding");
  const client = new Mexc.Spot();
  client.config.apiKey = `${process.env.API_KEY_READ}`;
  client.config.apiSecret = `${process.env.API_SECRET_READ}`;
  const allTokens = client.exchangeInfo();
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(allTokens, null, 4));
  next();
});

app.listen(8000, () => {
  console.log("...listening");
});

//TODO: create an endpoint that starts evaluating all the coins in the marketplace to look for newly added coins (this in front-end side)
//TODO: check for duplicated files in the project within node_modules, etc... prepare the project to be uploaded to github
//TODO: check for the price variation of tokens within the last decided time interval and calculate if it is more than a certain percetatge during a certain number of iterations,
// i.e. the price is going up more than 5% during 5 consecutives periods of 5min so to total has gone up more than 25%
