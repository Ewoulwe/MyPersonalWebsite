const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const servicesschema = new Schema({
    icon:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
}, {timestamps:true})

const servicedata = mongoose.model("services",servicesschema);
module.exports = servicedata;