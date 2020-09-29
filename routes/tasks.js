const express=require('express');

const taskController=require('../constroller/task');

const router=express.Router();

router.post('/createTask',taskController.createTask)

router.get('/getTask/:id',taskController.getTask)

router.patch('/updateTask/:id',taskController.updateTask)

router.delete('/deleteTask/:id',taskController.deleteTask)

module.exports=router;

