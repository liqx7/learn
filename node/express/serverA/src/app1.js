const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/login", (req, res) => {
  res.cookie("user", "jay", { maxAge: 200000000, httpOnly: true });
  res.json({ code: 0, message: "登录成功" });
  // res.send("hello world");
});

app.get("/user", (req, res) => {
  const user = req.headers.cookie.split("=")[1];
  res.json({ code: 0, user });
});

// 托管html
app.use("/static", express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
