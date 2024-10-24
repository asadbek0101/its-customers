import { User } from "../entities/User";

export interface IUserRepository {
  getAll(limit: number, offset: number): Promise<User[]>;
  getOne(id: number): Promise<string>;
  create(user: User): Promise<string>;
  update(user: User): Promise<string>;
  delete(id: number): Promise<string>;
}
