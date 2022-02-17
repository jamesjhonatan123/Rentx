import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  private static INSTANCE: ICategoryRepository;

  private constructor() {
    this.repository = getRepository(Category);
  }

  public static getInstance() {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }

  async create({ name, description }): Promise<void> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const categoryAlreadyExist = await this.repository.findOne({ name });

    return categoryAlreadyExist;
  }
}

export { CategoryRepository };
