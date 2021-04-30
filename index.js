const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const PORT=3000;
const routes=require("./routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.get("/",routes);
app.post("/",routes);
app.get("/edit/:_id",routes);
app.get("/delete/:_id",routes);
app.listen(PORT,()=>{
    console.log(`I am runnung on port ${PORT}`)
})