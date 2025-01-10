const express = require('express');

const cors = require('cors');
const app = express();
app.use(cors());



app.get("/sumserver",function(req,res){
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  const sum =a+b;
  res.send(sum.toString());
})

app.listen(3000);
