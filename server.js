const express =require('express');
const routesTasks=require('./routes/tasks')

const app=express();

app.use(express.json());

const PORT=3000;

app.get('/',(req,res)=>{
    res.status(200).json({message:"hi maria"})
});

app.use('/api/tasks',routesTasks)
app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})