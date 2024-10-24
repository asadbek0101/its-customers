import { inject, injectable } from "inversify";
import { IUserInteractor } from "../interfaces/IUserInteractor";
import { INTERFACE_TYPE } from "../utils/AppConst";
import { NextFunction, Request, Response } from "express";

@injectable()
export class UserController {
  private interactor: IUserInteractor;

  constructor(
    @inject(INTERFACE_TYPE.UserInteractor) interactor: IUserInteractor
  ) {
    this.interactor = interactor;
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const offset = parseInt(`${req.query.offset}`) || 0;
      const limit = parseInt(`${req.query.limit}`) || 10;
      const data = await this.interactor.getAllUsers(limit, offset);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id = 0 } = req.query;
      const data = await this.interactor.getOneUser(Number(id));
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.body;
      const data = await this.interactor.createUser(user);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.body;
      const data = await this.interactor.updateUser(user);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { Id = 0 } = req.query;
      const data = await this.interactor.deleteUser(Number(Id));
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
