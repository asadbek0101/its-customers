import { Pool } from "pg";
import { Log } from "../entities/Log";
import { ILogRepository } from "../interfaces/ILogRepository";
import { pgClient } from "../dbConnection";
import { injectable } from "inversify";

@injectable()
export class LogRepository implements ILogRepository {
  private client: Pool;
  constructor() {
    this.client = pgClient();
  }
  async getAll(limit: number, offset: number): Promise<Log[]> {
    const data = await this.client.query(
      `SELECT * FROM "Logs" LIMIT $1 OFFSET $2`,
      [limit, offset]
    );
    return data.rows;
  }

  async getOne(id: number): Promise<Log> {
    const data = await this.client.query(`SELECT * FROM "Logs" WHERE "Id"=$1`, [
      id,
    ]);
    return data.rows[0];
  }
}
