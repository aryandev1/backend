const mongoose=require("mongoose")
const postmodel=mongoose.Schema({
    todo:String
})
module.exports=mongoose.model('todolist',postmodel)