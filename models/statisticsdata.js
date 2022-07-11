const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const statisticsschema = new Schema({
    title:{
        type:String,
        require:true
    },
    amout:{
        type:String,
        require:true
    },
}, {timestamps:true})

const statisticsdata = mongoose.model("statistics",statisticsschema);
module.exports = statisticsdata;