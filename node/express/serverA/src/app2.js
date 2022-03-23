const express = require("express");
const app = express();

app.all("*", (Req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get("/anotherService", (req, res) => {
  res.json({ code: 0, message: "8003返回的" });
});

app.listen("8003", () => {
  console.log("app2 running at port 8003");
});
