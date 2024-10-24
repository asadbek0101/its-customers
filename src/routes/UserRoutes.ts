import express from "express";
import { Container } from "inversify";

import { TokenVerification } from "../auth/Verification";
import { INTERFACE_TYPE } from "../utils/AppConst";
import { IUserRepository } from "../interfaces/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";
import { IUserInteractor } from "../interfaces/IUserInteractor";
import { UserController } from "../controllers/UserController";
import { UserInteractor } from "../interactors/UserInteractor";

const container = new Container();

container
  .bind<IUserRepository>(INTERFACE_TYPE.UserRepository)
  .to(UserRepository);

container
  .bind<IUserInteractor>(INTERFACE_TYPE.UserInteractor)
  .to(UserInteractor);

container.bind(INTERFACE_TYPE.UserController).to(UserController);

const controller = container.get<UserController>(INTERFACE_TYPE.UserController);

const router = express.Router();

/**
 * @swagger
 * '/Users/GetAll':
 *  get:
 *     tags:
 *     - Users
 *     summary: Get all users
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

router.get("/GetAll", TokenVerification, controller.getUsers.bind(controller));

/**
 * @swagger
 * '/Users/GetOne':
 *  get:
 *     tags:
 *     - Users
 *     summary: Get one user
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

router.get("/GetOne", TokenVerification, controller.getOne.bind(controller));

/**
 * @swagger
 * '/Users/Create':
 *  post:
 *     tags:
 *     - Users
 *     summary: Create a user
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - ComponyName
 *              - Username
 *              - Password
 *            properties:
 *              ComponyName:
 *                type: string
 *                default: string
 *              Username:
 *                type: string
 *                default: string
 *              Password:
 *                type: string
 *                default: string
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

router.post(
  "/Create",
  TokenVerification,
  controller.createUser.bind(controller)
);

/**
 * @swagger
 * '/Users/Update':
 *  put:
 *     tags:
 *     - Users
 *     summary: Update a user
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - Id
 *              - ComponyName
 *              - Username
 *              - Password
 *            properties:
 *              Id:
 *                type: number
 *                default: 0
 *              ComponyName:
 *                type: string
 *                default: string
 *              Username:
 *                type: string
 *                default: string
 *              Password:
 *                type: string
 *                default: string
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

router.put(
  "/Update",
  TokenVerification,
  controller.updateUser.bind(controller)
);

/**
 * @swagger
 * '/Users/Delete':
 *  delete:
 *     tags:
 *     - Users
 *     summary: Delete a user
 *     parameters:
 *         - in: query
 *           name: Id
 *           required: true
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

router.delete(
  "/Delete",
  TokenVerification,
  controller.deleteUser.bind(controller)
);

export default router;
