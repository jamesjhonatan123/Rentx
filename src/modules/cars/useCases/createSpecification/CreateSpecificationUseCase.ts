import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  description: string;
  name: string;
  id: string;
}

class CreateSpecificationUseCase {
  constructor(private SpecificationsRepository: ISpecificationsRepository) {}
  execute({ description, name, id }: IRequest) {
    const specificationAlreadyExists =
      this.SpecificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("specification already exist");
    }
    this.SpecificationsRepository.create({ name, description, id });
  }
}

export { CreateSpecificationUseCase };
