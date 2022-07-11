const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const skillsschema = new Schema({
    title:{
        type:String,
        require:true
    },
    float:{
        type:String,
        require:true
    },
}, {timestamps:true})

const skillsdata = mongoose.model("skills",skillsschema);
module.exports = skillsdata;