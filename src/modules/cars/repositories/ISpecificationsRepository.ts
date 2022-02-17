import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
  id?: string;
} //  criando o molde de input da função create

interface ISpecificationsRepository {
  create({ name, description, id }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
