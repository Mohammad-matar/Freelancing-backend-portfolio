const express = require("express")
const controller = require("../Controllers/personalInfoController")
const router = express.Router();



// Create Routes
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/",  controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;    