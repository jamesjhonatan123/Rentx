import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response) {
    const { name, description, id } = request.body;

    this.createCategoryUseCase.execute({ name, description, id });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
