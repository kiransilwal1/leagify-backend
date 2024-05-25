const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/",controller.getLeagueformats);
router.post("/",controller.addLeagueformat);
router.get("/:id",controller.getLeagueformatsById);
router.put("/:id",controller.updateLeagueformat);
router.delete("/:id",controller.removeLeagueformat);


module.exports = router;