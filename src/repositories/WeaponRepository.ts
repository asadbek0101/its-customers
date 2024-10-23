import { injectable } from "inversify";
import { IWeaponRepository } from "../interfaces/IWeaponRepository";

@injectable()
export class WeaponRepository implements IWeaponRepository {
  private title: string;

  constructor() {
    this.title = "Salom Asadbek";
  }

  async getAll(): Promise<any> {
    return { message: this.title };
  }
}
