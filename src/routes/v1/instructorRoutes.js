import express from "express";
import instructorController from "../../controllers/instructorController.js";

const instructorRouter = express.Router();

instructorRouter.post("/singnup", instructorController.singup);

export default instructorRouter;
