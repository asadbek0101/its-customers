import express from "express";
import { Container } from "inversify";

import { TokenVerification } from "../auth/Verification";
import { INTERFACE_TYPE } from "../utils/AppConst";
import { ILogRepository } from "../interfaces/ILogRepository";
import { ILogInteractor } from "../interfaces/IlogInteractor";
import { LogRepository } from "../repositories/LogRepository";
import { LogInteractor } from "../interactors/LogInteractor";
import { LogController } from "../controllers/LogController";

const container = new Container();

container.bind<ILogRepository>(INTERFACE_TYPE.LogRepository).to(LogRepository);

container.bind<ILogInteractor>(INTERFACE_TYPE.LogInteractor).to(LogInteractor);

container.bind(INTERFACE_TYPE.LogController).to(LogController);

const controller = container.get<LogController>(INTERFACE_TYPE.LogController);

const router = express.Router();

/**
 * @swagger
 * '/Logs/GetAll':
 *  get:
 *     tags:
 *     - Logs
 *     summary: Get all logs
 *     parameters:
 *        - in: query
 *          name: limit
 *        - in: query
 *          name: offset
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *       400:
 *         description: Bad request
 */

router.get(
  "/GetAll",
  TokenVerification,
  controller.getAllLogs.bind(controller)
);

/**
 * @swagger
 * '/Logs/GetOne':
 *  get:
 *     tags:
 *     - Logs
 *     summary: Get one log
 *     parameters:
 *        - in: query
 *          name: id
 *          required: true
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

router.get("/GetOne", TokenVerification, controller.getOneLog.bind(controller));

export default router;
