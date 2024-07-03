import express from "express";

import userRouter from "./userRoutes.js";
import instructorRouter from "./instructorRoutes.js";

const v1Router = express.Router();

v1Router.get("/", (req, res) => {
  res.send("hello world");
});

v1Router.use("/users", userRouter);

v1Router.use("/instructors", instructorRouter);

export default v1Router;
