//Server Create Express 1 setup call Express js 


// call express js and store Express 
const Express = require("express")
//Express store app
const app = Express()


// router Setup 

// aap .get url এ জেখন  / hit করবে তখন এই পেজ কাজ করবে আমরা Express js দিয়ে সহজে ruter config করতে পারি express js diye যেইটা node js দিয়ে করতে অনেক কিছু করতে হয় if eles লাগে যা express js a lage na 


//============================ routing ============================

// get routing এর ভিতর ২ টা জিনিস সব সময় থাকে ১ টা request and respones request হল url  এ কি request করবে অ্যান্ড রেস্পন্স হইতেছে ওই request এ কি body তে কি দেখাবে expres js a all time 1st prameter requset and 2nd respones body তে কোন কিছু দেখিতে চাইলে response.Send(যা দিব তাই শো হবে body তে )

app.get("/", (req , res )=>{
res.send('hello Express!')
})

app.get("/about", (req , res)=>{
res.send("about Page")
})

// ====================== dynamic routing ===============================

// dynamic routing crete kore সময় মনে রাখেতে হবে url :unic name দিতে হবে যেকোন নামে হইতে পারে কিন্তু এইখআনে যে নামে হবে সেম ভিতর এই নামে হবে 
app.get("/user/:id", (req, res )=>{
    // req.params দিয়ে url এ যা দিয়ে হিট করবে সেই টা নিয়ে userID te store korbe 
    let userID = req.params.id
    res.status(200).send(userID);
})

// ==================== Url Query =====================
app.get("/serch", (req, res )=>{

    // query.name যে দিতেছি সেমা এই নামে  এ url er key থাকতে হবে 
    let name = req.query.name;
    let age = req.query.age;

    res.send(`name is ${name}. and age is ${age}`)
})




 
// Server Create 
app.listen(3000, ()=>{
    console.log("Server runnig.......")
})

