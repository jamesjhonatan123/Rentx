import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]; // Não permitir o acesso fora da classe
  //  Garanto a integridade das informações
  private static INSTANCE: ISpecificationsRepository;
  constructor() {
    this.specifications = [];
  } //  No ato de instanciamento da classe, specification começa com []
  public static getInstance() {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }
  create({ name, description, id }: ICreateSpecificationDTO): void {
    const specification = new Specification(id);

    Object.assign(specification, {
      name,
      description,
      createdAt: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string) {
    const specification = this.specifications.find(
      (spec) => spec.name === name
    );
    return specification;
  }
}

export { SpecificationsRepository };
