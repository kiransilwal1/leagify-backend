const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/",controller.getPlayers);
router.post("/",controller.addPlayer);
router.get("/:id",controller.getPlayersById);
router.put("/:id",controller.updatePlayer);
router.delete("/:id",controller.removePlayer);


module.exports = router;