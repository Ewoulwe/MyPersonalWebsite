const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const projectsschema = new Schema({
    title:{
        type:String,
        require:true
    },
    tags:{
        
    },
    dateandtime:{
        type:String,
        require:true
    },
    image:{
        
    },
    tourl:{
        type:String,
        require:true
    },
}, {timestamps:true})

const projectssdata = mongoose.model("projects",projectsschema);
module.exports = projectssdata;