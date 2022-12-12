const express = require("express");

const app=express()

app.get('/',(req,res)=>{
    // res.json("json rendered text")
    let employees=[
        {id:1,name:'Turan',age:19},
        {id:2,name:'ELgun',age:19},
        {id:3,name:'Rufet',age:19}
    ]
    res.json(employees)
})

app.listen(3000,()=>{
    console.log('Server started on 3000 port')
})
