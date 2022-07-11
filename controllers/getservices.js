const servicesdata = require("../models/servicesdata");

const getservices = async (req,res) =>{
    try{
        const notes = await servicesdata.find();
        res.status(200);
        res.send(notes)
    }
    catch(error){
        res.status(404).json({
            message:error.message,
        });
    }
};


module.exports = getservices;