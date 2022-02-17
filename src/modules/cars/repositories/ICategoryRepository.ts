import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
  id?: string;
}

interface ICategoryRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description, id }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoryRepository, ICreateCategoryDTO };
