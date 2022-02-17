import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(): Promise<Category[]> {
    const all = this.categoryRepository.list();

    return all;
  }
}

export { ListCategoriesUseCase };
