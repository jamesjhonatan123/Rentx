import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request, response) {
    const all = this.listCategoriesUseCase.execute();

    response.status(200).send(all);
  }
}

export { ListCategoriesController };
