import { injectable } from "inversify";
import { IUserRepository } from "../interfaces/IUserRepository";
import { pgClient } from "../dbConnection";
import { User } from "../entities/User";
import { Pool } from "pg";

@injectable()
export class UserRepository implements IUserRepository {
  private client: Pool;
  constructor() {
    this.client = pgClient();
  }

  async getAll(limit: number, offset: number): Promise<User[]> {
    const users = await this.client.query(
      `SELECT * FROM "Users" LIMIT $1 OFFSET $2`,
      [limit, offset]
    );
    return users.rows;
  }

  async getOne(id: number): Promise<string> {
    const users = await this.client.query(
      `SELECT * FROM "Users" WHERE "Id"=$1`,
      [id]
    );
    return users.rows[0];
  }

  async create(user: User): Promise<string> {
    const added = await this.client.query(
      `INSERT INTO "Users"("ComponyName", "Username", "Password", "IsActive") VALUES ($1, $2, $3, '1')`,
      [user.ComponyName, user.Username, user.Password]
    );
    return "Created";
  }

  async update(user: User): Promise<string> {
    const updated = await this.client.query(
      `UPDATE "Users" SET "ComponyName"=$1, "Username"=$2, "Password"=$3 WHERE "Id"=$4`,
      [user.ComponyName, user.Username, user.Password, user.Id]
    );
    return "Updated";
  }

  async delete(id: number): Promise<string> {
    const deleted = await this.client.query(
      `DELETE FROM "Users" WHERE "Id"=$1`,
      [id]
    );
    return "Deleted";
  }
}
