import { inject, injectable } from "inversify";
import { IUserInteractor } from "../interfaces/IUserInteractor";
import { IUserRepository } from "../interfaces/IUserRepository";
import { INTERFACE_TYPE } from "../utils/AppConst";
import { User } from "../entities/User";

@injectable()
export class UserInteractor implements IUserInteractor {
  private repository: IUserRepository;

  constructor(
    @inject(INTERFACE_TYPE.UserRepository) repository: IUserRepository
  ) {
    this.repository = repository;
  }

  async getAllUsers(limit: number, offset: number) {
    return await this.repository.getAll(limit, offset);
  }

  async getOneUser(id: number) {
    return await this.repository.getOne(id);
  }

  async createUser(user: User) {
    return await this.repository.create(user);
  }

  async updateUser(user: User) {
    return await this.repository.update(user);
  }

  async deleteUser(id: number) {
    return await this.repository.delete(id);
  }
}
