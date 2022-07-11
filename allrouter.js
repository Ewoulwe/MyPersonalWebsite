const express =require("express");
const bodyParser = require('body-parser');
const getservices = require("./controllers/getservices")
const getskills = require("./controllers/getskills")
const getprojects = require("./controllers/getprojects")
const getstatistics = require("./controllers/getstatistics")




const router = express.Router();

var jsonParser = bodyParser.json()

router.get("/about/services",getservices);
router.get("/about/skills",getskills);
router.get("/projects",getprojects);
router.get("/statistics",getstatistics);


module.exports = router;