import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response) {
    const { name, description, id } = request.body;
    this.createSpecificationUseCase.execute({ name, description, id });
    return response.status(201).send();
  }
}

export { CreateSpecificationController };
