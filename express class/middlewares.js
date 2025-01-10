const express = require('express');

const port = process.env.PORT || 3000; // Allow dynamic port if hosted
const app = express();
function usermiddleware(req, res, next) {
    const username = req.headers['username'];
    const password = req.headers['password'];
    if (username != "ayush" || password != "pass") {
        res.status(403).json({
            msg: "User does not exist",
          });
    } else {
        next();
    }
}

function kidneysmiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "Invalid kidneyId",
        });
    } else {
        next();
    }
}
app.get("/health-checkup", usermiddleware,kidneysmiddleware,(req, res) => {
    
    res.send('Healthy heart');

});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
