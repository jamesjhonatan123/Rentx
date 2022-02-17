import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
  description: string;
  name: string;
  id?: string;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  execute({ description, name, id }: IRequest) {
    if (this.categoryRepository.findByName(name)) {
      throw new Error("category already exist");
    }
    this.categoryRepository.create({ description, name, id });
  }
}

export { CreateCategoryUseCase };
