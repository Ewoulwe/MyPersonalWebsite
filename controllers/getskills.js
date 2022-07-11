const skillsdata = require("../models/skillsdata");

const getskills = async (req,res) =>{
    try{
        const notes = await skillsdata.find();
        res.status(200);
        res.send(notes)
    }
    catch(error){
        res.status(404).json({
            message:error.message,
        });
    }
};


module.exports = getskills;