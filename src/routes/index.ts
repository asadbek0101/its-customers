import express from "express";
import userRouter from "./UserRoutes";
import logRouter from "./LogRoutes";

const router = express.Router();

router.use("/Users", userRouter);
router.use("/Logs", logRouter);

export default router;
