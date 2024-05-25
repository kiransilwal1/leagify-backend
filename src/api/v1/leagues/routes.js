const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/",controller.getLeagues);
router.post("/",controller.addLeague);
router.get("/:id",controller.getLeaguesById);
router.put("/:id",controller.updateLeague);
router.delete("/:id",controller.removeLeague);


module.exports = router;