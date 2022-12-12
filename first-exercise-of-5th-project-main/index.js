const express = require("express");

const app=express()

app.get('/',(req,res)=>{
    // res.json("json rendered text")
    let employees=[
        {id:1,name:'Esmira',age:19},
        {id:2,name:'Banu',age:19},
        {id:3,name:'Fidan',age:19}
    ]
    res.json(employees)
})

app.listen(3000,()=>{
    console.log('Server started on 3000 port')
})