const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}];

app.use(express.json());

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let healthykidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++){
        if (johnKidneys[i].healthy) {
            healthykidneys++;
        }
    }

    const unhealthyKidneys = numberOfKidneys - healthykidneys;

    res.json({
        numberOfKidneys,
        healthykidneys,
        unhealthyKidneys
    })
    
})


app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})


app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({});
})


app.delete("/", function (req, res) {
    // Check if there's at least one unhealthy kidney
    if (isThereAtLeastOneUnhealthyKidney()) {
        const newKidneys = [];

        
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                });
            }
        }

        
        users[0].kidneys = newKidneys;

      
        res.json({
            msg: "done"
        });
    } else {
       
        res.status(411).json({
            msg: "you have no bad kidney"
        });
    }
});

function isThereAtLeastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }   
    }

    return atleastOneUnhealthyKidney;
}
app.listen(3000);