const projectsdata = require("../models/projectsdata");

const getprojects = async (req,res) =>{
    try{
        const notes = await projectsdata.find();
        res.status(200);
        res.send(notes)
    }
    catch(error){
        res.status(404).json({
            message:error.message,
        });
    }
};


module.exports = getprojects;