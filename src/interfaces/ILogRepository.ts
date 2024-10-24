import { Log } from "../entities/Log";

export interface ILogRepository {
  getAll(limit: number, offset: number): Promise<Log[]>;
  getOne(id: number): Promise<Log>;
}
