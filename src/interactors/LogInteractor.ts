import { inject, injectable } from "inversify";
import { ILogInteractor } from "../interfaces/IlogInteractor";
import { INTERFACE_TYPE } from "../utils/AppConst";
import { ILogRepository } from "../interfaces/ILogRepository";

@injectable()
export class LogInteractor implements ILogInteractor {
  private repository: ILogRepository;

  constructor(
    @inject(INTERFACE_TYPE.LogRepository) repository: ILogRepository
  ) {
    this.repository = repository;
  }

  async getAllLogs(limit: number, offset: number) {
    return await this.repository.getAll(limit, offset);
  }

  async getOneLog(id: number) {
    return await this.repository.getOne(id);
  }
}
