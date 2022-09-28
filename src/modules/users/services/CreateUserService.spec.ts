import UsersRepositoryInMemory from "../repositories/in-memory/UsersRepositoryInMemory";
import CreateUserService from "./CreateUserService";
import BCryptHashProvider from "@shared/container/providers/HashProvider/implementations/BCryptHashProvider";
import mailConfig from "@config/mail";

import EtherealMailProvider from "@shared/container/providers/MailProvider/implementations/EtherealMailProvider";
import SESMailProvider from "../../../shared/container/providers/MailProvider/implementations/SESMailProvider";
import { container } from "tsyringe";

const mailProviders = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

const providers = {
  bcrypt: BCryptHashProvider,
};

describe("Create User", () => {
  let createUserService: CreateUserService;
  let usersRepositoryInMemory: UsersRepositoryInMemory;

  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserService = new CreateUserService(
      usersRepositoryInMemory,
      new providers.bcrypt(),
      mailProviders[mailConfig.driver]
    );
  });

  it("should be able to create a user", () => {

  });
});
