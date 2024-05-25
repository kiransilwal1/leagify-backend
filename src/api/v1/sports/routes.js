const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/",controller.getSports);
router.post("/",controller.addSport);
router.get("/:id",controller.getSportsById);
router.put("/:id",controller.updateSport);
router.delete("/:id",controller.removeSport);


module.exports = router;