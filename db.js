
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://admin:lf@123Shristi@cluster0.ibnzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
const db=mongoose.connection;
if(!db){
    console.log("err")
}
else{
    console.log("you are done");
}
const newSchema=new mongoose.Schema({
    name:String
});
const newModel=mongoose.model('project',newSchema);
module.exports=newModel;
