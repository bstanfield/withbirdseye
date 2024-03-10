const express = require("express");

const port = 4444;

const app = express();

const wren = "https://wren.co/birdseye";
const ref = "?ref=withbirdseye.com";

app.get("/", async (req, res) => {
  return res.redirect(`${wren}${ref}`);
});

app.get("*", (req, res) => {
  return res.redirect(`${wren}${req.originalUrl}${ref}`);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
