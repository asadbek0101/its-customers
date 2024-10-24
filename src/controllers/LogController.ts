import { inject, injectable } from "inversify";
import { ILogInteractor } from "../interfaces/IlogInteractor";
import { INTERFACE_TYPE } from "../utils/AppConst";
import { NextFunction, Request, Response } from "express";

@injectable()
export class LogController {
  private interactor: ILogInteractor;

  constructor(
    @inject(INTERFACE_TYPE.LogInteractor) interactor: ILogInteractor
  ) {
    this.interactor = interactor;
  }

  async getAllLogs(req: Request, res: Response, next: NextFunction) {
    try {
      const offset = parseInt(`${req.query.offset}`) || 0;
      const limit = parseInt(`${req.query.limit}`) || 10;
      const data = await this.interactor.getAllLogs(limit, offset);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async getOneLog(req: Request, res: Response, next: NextFunction) {
    try {
      const { id = 0 } = req.query;
      const data = await this.interactor.getOneLog(Number(id));
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
