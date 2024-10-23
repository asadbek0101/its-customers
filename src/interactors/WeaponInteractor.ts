import { inject, injectable } from "inversify";
import { IWeaponInteractor } from "../interfaces/IWeaponInteractor";
import { IWeaponRepository } from "../interfaces/IWeaponRepository";
import { INTERFACE_TYPE } from "../utils/AppConst";

@injectable()
export class WeaponInteractor implements IWeaponInteractor {
  private repository: IWeaponRepository;

  constructor(
    @inject(INTERFACE_TYPE.WeaponRepository) repository: IWeaponInteractor
  ) {
    this.repository = repository;
  }

  async getAll() {
    return await this.repository.getAll();
  }
}
