const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const todos = require("./backend/routes/todoRoutes");

//MiddleWare

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);
app.use(cors());

app.use("/api", todos);

app.listen(3000, (req, res) => {
  console.log("Server listening on port 3000");
});
