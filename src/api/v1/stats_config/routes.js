const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/",controller.getStatsConfigs);
router.post("/",controller.addStatsConfig);
router.get("/:id",controller.getStatsConfigsById);
router.put("/:id",controller.updateStatsConfig);
router.delete("/:id",controller.removeStatsConfig);


module.exports = router;