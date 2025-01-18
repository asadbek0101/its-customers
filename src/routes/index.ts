import express from "express";
import userRouter from "./UserRoutes";

const router = express.Router();

router.use("/Users", userRouter);

export default router;
