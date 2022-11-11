const router = require("express").Router();
const Controller = require("../controller/index");

router.post("/employee", Controller.create);
router.delete("/employee/:id", Controller.deleteEmployee);
router.get("/dataperyear", Controller.dataPerYear);
router.get("/datapersatisfaction", Controller.datapersatisfaction);
router.get("/dataperdepartment", Controller.dataperdepartment);
router.get("/combination", Controller.combination);
