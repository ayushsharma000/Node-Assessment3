const express=require('express')
const app = express();

const middleware1=(req,res,next)=>
{
    console.log("middleware1");
    next();
}

const middleware2=(req,res,next)=>
{
    console.log("middleware 2 for all");
    next();
}

app.use(middleware2);
app.get('/link1', middleware1, (req,res)=>
{

    res.send("<h1> Link1 with middleware 1 and 2</h1>");
})

app.get('/link2',(req,res)=>
{

    res.send("<h1> Link2 with middleware2</h1>");
})


app.get('/link3', (req,res)=>
{

    res.send("<h1> Link3 with middleware2</h1>");
})


app.get('/link4', middleware1, (req,res)=>
{

    res.send("<h1> Link4 with middleware 1 and 2</h1>");
})


app.listen(3000, ()=>{
    console.log("server started");
})