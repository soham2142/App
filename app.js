const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use("/login", (req,res) => {
    res.status(200).json({
        msg: "log in successful"
    })
    next();
});


app.get("/login", (req,res) => {
    res.status(200).json({
        msg: "hello its arshiya"
    })
});

app.listen(port , () => {
    console.log(`server is running at port ${port}`);
});