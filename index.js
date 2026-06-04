//Server Create Express 1 setup call Express js 


// call express js and store Express 
const Express = require("express")
//Express store app
const app = Express()


// router Setup 

// aap .get url এ জেখন  / hit করবে তখন এই পেজ কাজ করবে আমরা Express js দিয়ে সহজে ruter config করতে পারি express js diye যেইটা node js দিয়ে করতে অনেক কিছু করতে হয় if eles লাগে যা express js a lage na 

// get routing 
app.get("/", (req , res )=>{
res.send('hello Express!')
})

app.get("/about", (req , res)=>{
res.send("about Page")
})

// dynamic routing crete kore সময় মনে রাখেতে হবে url :unic name দিতে হবে যেকোন নামে হইতে পারে কিন্তু এইখআনে যে নামে হবে সেম ভিতর এই নামে হবে 
app.get("/user/:id", (req, res )=>{
    // req.params দিয়ে url এ যা দিয়ে হিট করবে সেই টা নিয়ে userID te store korbe 
    let userID = req.params.id
    res.status(200).send(userID);
})

 
// Server Create 
app.listen(3000, ()=>{
    console.log("Server runnig.......")
})

