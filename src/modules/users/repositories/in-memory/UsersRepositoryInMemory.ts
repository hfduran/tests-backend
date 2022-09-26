import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";
import { Users } from "@prisma/client";
import IUsersRepository from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  private users: Users[] = [];

  private nextId = -1;

  private getId() {
    return (this.nextId++).toString();
  }

  public async findByEmailWithRelations(email: string): Promise<Users | null> {
    let foundUser: Users | undefined | null = this.users.find(
      (user) => user.email === email
    );

    if (!foundUser) foundUser = null;

    return foundUser;
  }

  public async findByEmailPhoneOrCpf(
    email: string,
    phone: string,
    cpf: string
  ): Promise<Users | null> {
    let foundUser: Users | undefined | null = this.users.find(
      (user) => user.email === email || user.cpf === cpf || user.phone === phone
    );

    if (!foundUser) foundUser = null;

    return foundUser;
  }
  create(data: ICreateUserDTO): Promise<Users> {
    const newUser = { ...data, id: this.getId() } as Users;

    this.users.concat();
  }
}
