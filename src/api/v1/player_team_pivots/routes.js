const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/",controller.getPlayer_team_pivots);
router.post("/",controller.addPlayer_team_pivot);
router.get("/:id",controller.getPlayer_team_pivotsById);
router.put("/:id",controller.updatePlayer_team_pivot);
router.delete("/:id",controller.removePlayer_team_pivot);


module.exports = router;