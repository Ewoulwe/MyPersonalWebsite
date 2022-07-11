const express =require("express");
const bodyParser = require('body-parser');
const getservices = require("./controllers/getservices")
const getskills = require("./controllers/getskills")
const getprojects = require("./controllers/getprojects")
const getstatistics = require("./controllers/getstatistics")




const router = express.Router();

var jsonParser = bodyParser.json()

router.get("/about/getservices",getservices);
router.get("/about/getskills",getskills);
router.get("/getprojects",getprojects);
router.get("/getstatistics",getstatistics);


module.exports = router;