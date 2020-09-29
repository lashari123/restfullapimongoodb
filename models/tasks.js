const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    assignee:{ 
        type:String,
        required:true

     },
     completed:{
         type:String,
         required:true,
         default:false
     }
})


module.exports=mongoose.model('task',taskSchema);