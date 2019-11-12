const express=require("express")
const router=express.Router()
router.use(express.json())
const todomodel=require("../models/todomodel.js")
router.post("/",(req,res)=>{
    const todo = new todomodel({todo:req.body.todo})
    todo.save()
})
router.get("/",async (req,res)=>{
    try{
    const todo=await todomodel.find()
    console.log(todo)
    res.json(todo)
}catch(err) {
    console.log(err)
}
})
module.exports=router