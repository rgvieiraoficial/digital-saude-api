import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  async execute({ user_id }: IRequest): Promise<{}> {
    const user = await this.usersRepository.findById(user_id);

    return user;
  }
}

export { ShowUserProfileUseCase };