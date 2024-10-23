import express from "express";
import { Container } from "inversify";

import { IWeaponInteractor } from "../interfaces/IWeaponInteractor";
import { IWeaponRepository } from "../interfaces/IWeaponRepository";
import { WeaponInteractor } from "../interactors/WeaponInteractor";
import { WeaponRepository } from "../repositories/WeaponRepository";
import { WeaponController } from "../controllers/WeaponController";
import { TokenVerification } from "../auth/Verification";
import { INTERFACE_TYPE } from "../utils/AppConst";

const container = new Container();

container
  .bind<IWeaponRepository>(INTERFACE_TYPE.WeaponRepository)
  .to(WeaponRepository);

container
  .bind<IWeaponInteractor>(INTERFACE_TYPE.WeaponInteractor)
  .to(WeaponInteractor);

container
  .bind<WeaponController>(INTERFACE_TYPE.WeaponController)
  .to(WeaponController);

const controller = container.get<WeaponController>(
  INTERFACE_TYPE.WeaponController
);

const router = express.Router();

/**
 * @swagger
 * '/Weapons/':
 *  get:
 *     tags:
 *     - Weapons
 *     summary: Get all weapons
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *       400:
 *         description: Bad request
 */

router.get("/", TokenVerification, controller.getAllWeapons.bind(controller));

export default router;
