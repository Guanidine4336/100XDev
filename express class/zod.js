const express = require('express');
const zod = require('zod');
const app = express();

const schema = zod.array(zod.number());


// 
// {
//   email:  string 
//   password: atleast 8 characters
//   country: "IN","US"
// }
// 
// 

// const schema =zod.object({
//   email: zod.string().email(),
//   password: zod.string().min(8),
//   country: z.literal ("IN").or(z.literal("US")),
  
// })

app.use(express.json());

app.post("/", function (req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

  if(!response.success){
    res.status(411).json({
      msg: "Invalid input"
    })
  }else{
    res.send({
        response
    })
  }

})

app.listen(3000);