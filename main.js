const express=require('express');
const app=express();

app.get('/',(req,res)=>{
res.sendFile(__dirname+'/public/index.html');
})
.listen(3000,()=>{
    console.log('server started at port: 3000');
})