import { Router } from "express";
import knex from "./database/connection";

const routes = Router();

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

routes.get("/items", ItemsController.index);

routes.get("/points/:id", PointsController.show);
routes.post("/points", PointsController.store);

export default routes;
