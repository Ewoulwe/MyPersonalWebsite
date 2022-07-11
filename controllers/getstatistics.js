const statisticsdata = require("../models/statisticsdata");

const getstatistics = async (req,res) =>{
    try{
        const notes = await statisticsdata.find();
        res.status(200);
        res.send(notes)
    }
    catch(error){
        res.status(404).json({
            message:error.message,
        });
    }
};


module.exports = getstatistics;