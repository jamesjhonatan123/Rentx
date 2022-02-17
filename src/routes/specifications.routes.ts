import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

//  Rota pra consumir serviços relacionados à especificações.

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
