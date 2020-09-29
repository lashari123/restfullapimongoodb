const taskSchema=require('../models/tasks');




const createTask=(req,res)=>{
    const task =new taskSchema({
        title:req.body.title,
        assignee:req.body.assignee
    })

    task.save().then(()=>{
        console.log('task has created')
    }).catch((error)=>{
        res.status(404).json({message:error})
    })
    res.status(200).json({message:"hi silikna"});
}

const getTask=(req,res)=>{
    taskSchema.find({_Id:req.params.id},()=>{
       if(err)
{        console.log('err')}
else{
    res.status(404).json(result)
}
    });
    res.status(200).json({taskId:req.params.id})
}

const updateTask= async (req,res)=>{
const updateTask=await findOneAndUpdate({_id:req.params.id},{
    $set:{
        title:req.body.title,
        assignee:req.body.assignee
    },
},
    {new:new true});
if(updateTask){
    res.status(200),json({message:"task has updated"});
}else{
    res.status(404).json({message:"couldn't updated"})
}


    
}

const deleteTask= async(req,res)=>{
    const deleteTask=await taskSchema.findByIdAndDelete({_id:req.params.id});
    if(deleteTask){
        res.status(200),json({message:"task hasdeleted"});
    }else{
        res.status(404).json({message:"couldn't deleted"})
    }
    
}


module.exports= {createTask,getTask,updateTask,deleteTask};