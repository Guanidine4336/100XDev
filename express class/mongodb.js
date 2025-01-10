const mongoose = require('mongoose');
const express=require('express');
const app=express();
mongoose.connect('mongodb+srv://Guanidine:r6wZCVj4tq6Fucsk@cluster0.fpb4yjb.mongodb.net/newuser');

app.use(express.json());

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post('/signup', async function(req,res){

  const username=req.body.username;
  const email=req.body.email;
  const password=req.body.password;

  const exiistingUser =await User.findOne({email:email});

  if(exiistingUser){
    res.status(411).json({
      msg: "user already exist",
    })
  }else{
    const user=new User({
      name: username,
      email: email,
      password: password,
    })
    user.save();
    res.status(200).json({
      msg: "user created successfully",
    })
  }
})

