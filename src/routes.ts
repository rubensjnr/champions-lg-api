import { Router } from "express";
import { getPlayer } from "./controllers/playersController";

const router = Router();
router.get("/players", getPlayer);

export {
  router,
}
