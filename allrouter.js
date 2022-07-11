const express =require("express");
const bodyParser = require('body-parser');
// const getservices = require("../controller/getservices")
// const getskills = require("../controller/getskills")
// const getprojects = require("../controller/getprojects")


const router = express.Router();

var jsonParser = bodyParser.json()

// router.get("/about/services",getservices);
// router.get("/about/skills",getskills);
// router.get("/projects",getprojects);

router.get('/', (req,res) =>{
    res.send("fdfd");
})

module.exports = router;