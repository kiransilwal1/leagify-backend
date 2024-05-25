const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/",controller.getSportstypes);
router.post("/",controller.addSportstype);
router.get("/:id",controller.getSportstypesById);
router.put("/:id",controller.updateSportstype);
router.delete("/:id",controller.removeSportstype);


module.exports = router;