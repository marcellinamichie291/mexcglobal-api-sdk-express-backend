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
