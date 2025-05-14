const express = require("express")
const app = express()
app.use(express.json())
const port = 3000
app.post("/signup",(req,res)=>{
    const {username,email,password,dob} = req.body

    if (!email) return res.status(400).send("Email is required")
    if (!username) return res.status(400).send("Username is required")
    if (!password || password.length<8 || password.length>16 ) return res.status(400).send("Password length is required to be between 8 and 16")
    
    res.status(200).send("Signup is successful")
})
app.listen(port,()=>{
    console.log("Server is running sucessfullyyy")
})