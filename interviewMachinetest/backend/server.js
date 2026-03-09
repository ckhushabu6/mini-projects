const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const SECRET = "mysecretkey";

const user={
    username : "admin",
    password : "admin123"
};

app.post("/api/login" , (req ,res)=>{
    const{username, password} = req.body;
    if(username === user.username && password === password.user.password){
        const token = jwt.sign({username}, SECRET , { expiresIn : '1h'});

        return res.status(200).json({
            msg : "Login successful",
            token
        })
    }

    res.status(401).json({
        msg : " Invalid information"
    })
});



function authenicateToken(req , res, nex){
    const authHeader = res.headers["authorization"];
    if(!authHeader){
        return res.status(403).json({
            msg:"token required"
        });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err , user)=>{
        if(err) return res.status(403).json({msg: "invalid token"})
            req.user = user ;
            next();
    });

        
    
}
app.get("api/profile", authenicateToken ,(req  , res)=>{
    res.json({
        msg: 'user profile',
        user: req.user
    });
});

app.post("./api/logout" ,(req, res)=>{
    res.json({msg : 'Logout successful '})
})

app.listen(3000 , ()=>{
    console.log("sever is runing on port no. 3000")
})