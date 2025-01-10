const express=require('express');
const app=express();

app.use(express.json());


// global catches are error handling middlewares
app.post("/health-checkup",function(req,res){
  const kidneys=req.body.kidneys;
  const kidneylen=kidneys.length;
    res.send("you have "+kidneylen+" kidneys");
});


// global catches
app.use(function(err,req,res,next){
  res.json({
    msg: "Sorry something is wrong with our server",
  })
})

app.listen(3000);