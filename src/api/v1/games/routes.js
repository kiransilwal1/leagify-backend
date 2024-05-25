const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/",controller.getGames);
router.post("/",controller.addGame);
router.get("/:id",controller.getGamesById);
router.put("/:id",controller.updateGame);
router.delete("/:id",controller.removeGame);


module.exports = router;