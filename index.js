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


 
// Server Create 
app.listen(3000, ()=>{
    console.log("Server runnig.......")
})

