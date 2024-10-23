import express from "express";
import weaponRouter from "./WeaponRoutes";

const router = express.Router();

router.use("/Weapons", weaponRouter);

export default router;
