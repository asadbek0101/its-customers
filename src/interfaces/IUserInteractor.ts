import { User } from "../entities/User";

export interface IUserInteractor {
  getAllUsers(limit: number, offset: number);
  getOneUser(id: number);
  createUser(user: User);
  updateUser(user: User);
  deleteUser(id: number);
}
