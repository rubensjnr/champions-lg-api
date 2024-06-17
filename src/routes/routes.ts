import { Router } from "express";
import * as PlayerController from "../controllers/playersController";
import * as clubs  from "../controllers/clubsController";

const router = Router();

//GET
router.get("/players", PlayerController.getPlayer);
router.get("/players/:id", PlayerController.getPlayerById);
router.get("/clubs", clubs.getClubs);


//POST
router.post("/players", PlayerController.postPlayer);

//DELETE
router.delete("/players/:id", PlayerController.deletePlayerById);

//UPDATE
router.patch("/players/:id", PlayerController.updatePlayer)

export {
  router,
}
