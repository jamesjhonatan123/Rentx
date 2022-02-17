import { parse } from "csv-parse";
import fs from "fs";

import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IImportCategory {
  name: string;
  description: string;
  id?: string;
}

class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path); // criei uma readable stream
      const parseFile = parse();
      const categoriesParse: IImportCategory[] = [];
      stream.pipe(parseFile); //  cria uma write stream
      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categoriesParse.push({ name, description });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categoriesParse);
        })
        .on("error", (err) => {
          reject(console.log(err));
        }); //  o pipe escreve, o parse escuta e printa a linha.
      // this.categoryRepository.create();
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const categoryAlreadyExist = this.categoryRepository.findByName(
        category.name
      );
      if (categoryAlreadyExist) {
        return null;
      }
      return this.categoryRepository.create(category);
    });
  }
}

export { ImportCategoryUseCase };
