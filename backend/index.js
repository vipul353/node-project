const express = require("express");
const Data = require("./Data/data");
const router = require("./routers/AllRouters");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.send("app is running");
});
app.use("/api", router);

app.listen(3000, () => {
  console.log("app running on port 3000");
});
