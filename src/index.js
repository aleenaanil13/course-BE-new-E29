import express from "express";
import serverConfig from "./config/serverConfig.js";
import dbConnect from "./config/dbConfig.js";
import apiRouter from "./routes/index.js";

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(serverConfig.Port, () => {
  console.log(`Example app listening on port ${serverConfig.Port}`);
  dbConnect();
  console.log("Db connected checking connection");
});
