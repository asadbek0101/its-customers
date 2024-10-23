import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IWeaponInteractor } from "../interfaces/IWeaponInteractor";
import { INTERFACE_TYPE } from "../utils/AppConst";

@injectable()
export class WeaponController {
  private interactor: IWeaponInteractor;

  constructor(
    @inject(INTERFACE_TYPE.WeaponInteractor) interactor: IWeaponInteractor
  ) {
    this.interactor = interactor;
  }

  async getAllWeapons(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json(await this.interactor.getAll());
    } catch (error) {
      next(error);
    }
  }
}
