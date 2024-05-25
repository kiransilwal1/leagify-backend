const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/",controller.getTeams);
router.post("/",controller.addTeam);
router.get("/:id",controller.getTeamsById);
router.put("/:id",controller.updateTeam);
router.delete("/:id",controller.removeTeam);


module.exports = router;