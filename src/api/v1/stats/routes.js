const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/",controller.getStats);
router.post("/",controller.addStat);
router.get("/:id",controller.getStatsById);
router.put("/:id",controller.updateStat);
router.delete("/:id",controller.removeStat);


module.exports = router;