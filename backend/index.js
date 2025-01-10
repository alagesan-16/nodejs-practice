const express=require("express");
const cors = require("cors");
const app = express();
const option = {origin:(origin,callback) =>{
    callback(null,true)
}}
app.use(cors(option));
app.use(express.json());
const data=["hello",123,{"key":"value"}];


const studentdata =[ {
    name: "alagesan",
    age: 20,
    rollnumber:233034
},
];
app.post('/',(req,res)=>{
    studentdata.push(req.body);
    console.log(req.body);
    res.send("done")


})
app.get('/student',(req,res)=>{
    res.send(studentdata);
})
app.listen(3333,()=>{
    console.log("stared hhg")
})