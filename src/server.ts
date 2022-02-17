import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../swagger.json";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

import "./database";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333, () => {
  console.log("server is running in port 3333");
});
