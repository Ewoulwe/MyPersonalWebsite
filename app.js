const express = require("express");
const path = require("path");
const moongoose = require("mongoose");
const allrouter = require("./allrouter");
require("dotenv").config({path:"./config.env"});



const app = express();
const PORT = process.env.PORT || 5000;

const DBlink = process.env.MONGOURL;
moongoose.connect(DBlink , {useNewUrlParser : true} , {useUnifiedTopology : true})
.then((result) => app.listen(PORT, () =>{
    console.log("server çalıştı:" + "http://localhost:" + PORT);
}))
.catch((err) => console.log("(EROR)mongodb"))



if(process.env.NODE_ENV === "production")
{
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    app.use("/", allrouter);
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname, 'frontend','build','index.html'));
    })
}
else
{
    app.use("/", allrouter);
}



