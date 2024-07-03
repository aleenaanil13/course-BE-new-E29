import express from "express";
import userController from "../../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", userController.ping);

userRouter.post("/singnup", userController.signup);

export default userRouter;
