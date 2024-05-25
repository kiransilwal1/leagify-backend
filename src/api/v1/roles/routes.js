const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/",controller.getRoles);
router.post("/",controller.addRole);
router.get("/:id",controller.getRolesById);
router.put("/:id",controller.updateRole);
router.delete("/:id",controller.removeRole);


module.exports = router;