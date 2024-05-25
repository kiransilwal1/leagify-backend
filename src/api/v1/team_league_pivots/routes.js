const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/",controller.getTeam_league_pivots);
router.post("/",controller.addTeam_league_pivot);
router.get("/:id",controller.getTeam_league_pivotsById);
router.put("/:id",controller.updateTeam_league_pivot);
router.delete("/:id",controller.removeTeam_league_pivot);


module.exports = router;