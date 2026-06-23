//Server Create Express 1 setup call Express js 


// call express js and store Express 
const Express = require("express")

// cookie 
const cookie = require("cookie-parser")
//Express store app
const app = Express()
app.use(cookie())
// call path 
const path = require("path")

// body thke json data পাঠানোর জন্য 

//dotenv
require("dotenv").config();

app.use(Express.json());

app.use(Express.static(path.join(__dirname, "src")));


// multer 

const upload = require("./middleware/middlewar")

// router Setup 

// aap .get url এ জেখন  / hit করবে তখন এই পেজ কাজ করবে আমরা Express js দিয়ে সহজে ruter config করতে পারি express js diye যেইটা node js দিয়ে করতে অনেক কিছু করতে হয় if eles লাগে যা express js a lage na 


//============================ routing ============================

// get routing এর ভিতর ২ টা জিনিস সব সময় থাকে ১ টা request and respones request হল url  এ কি request করবে অ্যান্ড রেস্পন্স হইতেছে ওই request এ কি body তে কি দেখাবে expres js a all time 1st prameter requset and 2nd respones body তে কোন কিছু দেখিতে চাইলে response.Send(যা দিব তাই শো হবে body তে )

app.get("/", (req , res )=>{
res.status(200).sendFile(path.join(__dirname, "src" ,'index.html'))
})

app.get("/about", (req , res)=>{
res.send("about Page")
})

// =============================== middeware =======================
const myMeddleware = (req, res , next)=>{
console.log(" this middleware")
req.currentTime = new Date(Date.now())

next();
};

// ====================== dynamic routing ===============================

// dynamic routing crete kore সময় মনে রাখেতে হবে url :unic name দিতে হবে যেকোন নামে হইতে পারে কিন্তু এইখআনে যে নামে হবে সেম ভিতর এই নামে হবে 
// app.get("/user/:id", (req, res )=>{
//     // req.params দিয়ে url এ যা দিয়ে হিট করবে সেই টা নিয়ে userID te store korbe 
//     let userID = req.params.id
//     res.status(200).send(userID);
// })

// ==================== Url Query =====================
app.get("/serch",  (req, res )=>{

    // query.name যে দিতেছি সেমা এই নামে  এ url er key থাকতে হবে 
    let name = req.query.name;
    let age = req.query.age;

    res.send(`name is ${name}. and age is ${age}`)
   
})

// ===================respons sendFile html file ================
app.get("/home", myMeddleware, (req, res)=>{
   
    res.status(200).sendFile(path.join(__dirname, 'index.html'))

    console.log(req.currentTime)
  
});

//=================== redirect ======================== 
app.get("/old-page", (req, res)=>{

    res.redirect("/new-page")
})
 

// page download 
app.get("/download", (req , res)=>{
    res.download("./class.pdf")
  
})


// ================== custom Header set ======================
app.get("/customHeader", (req, res)=>{
    res.set("name" , "Sofik")
    res.send("header set")
} )


// ======================= cookie set up ==================== 

app.get("/cookie", (req , res)=>{
    res.cookie("user", "Sofik")
    res.send("cookie set up ")
});

app.get("/cookieDelet", (req, res)=>{
res.clearCookie("user");
res.send("cookie deleted")
});
// ====================== Handling HTTP Methods- GET POST PUT DELETE =====================

let user =[
{
    "id": 1,
    "name" : "Sofik",
    "Email" : "sofik2002@gamil.com",
    "mobile": "01315116027"
},
{
    "id": 2,
    "name" : "Rofik",
    "Email" : "rofik@gamil.com",
    "mobile": "013100000"
},
{
    "id": 3,
    "name" : "salam",
    "Email" : "salam@gamil.com",
    "mobile": "01715116027"
},
{
    "id": 4,
    "name" : "raju",
    "Email" : "raju@gamil.com",
    "mobile": "0122294004"
},
{
    "id": 5,
    "Name" : "naeim",
    "Email" : "naeim@gamil.com",
    "Mobile": "0178876027"
},
]


// get method  only date read 
app.get("/user", (req, res)=>{
    res.status(200).json({
        success: true,
        total : user.length,
         Data : user
    })
})

// যে কেন একটা ডাটা যদি দেখতে চাই তার id দিয়ে 

app.get("/user/:id", (req , res)=>{
    let users = user.find(u=>u.id === parseInt(req.params.id));
    if(!users){
        res.status(404).json({
            success : false,
            message : `sorry ${req.params.id} note Fund !`
        });

    };
    res.status(200).json({
        success: true,
        Data : users
    })
});

//================== PUST new data create =================

app.post("/user", (req, res)=>{
    const {Name , Email , Mobile } = req.body;

    if(!Name || !Email || !Mobile){
        return   res.status(400).send("plese name or emaile and mobile numer ")
    };
    let addUser ={
        id: user.length + 1,
        Name,
        Email ,
        Mobile

    };
    user.push(addUser);

    res.status(200).json({
        success: true,
        data: addUser 
    });
});


//================= PUT =====================================
app.put("/user/:id", (req , res)=>{
    const index = user.findIndex(u =>u.id === parseInt(req.params.id))
    if(index === -1){
        return res.status(404).json({
            success: false,
            message: `not valid this ID: ${req.params.id} `
        });
    };
    const {Name , Email , Mobile} = req.body
    
    user[index] ={
        id: parseInt(req.params.id),
        Name,
        Email,
        Mobile
    }
    res.status(200).json({
        Succes: true,
    data: user[index]
    })
})


// ===================== delete method ===============================
app.delete("/user/:id", (req, res)=>{
let index = user.findIndex(u=>u.id === parseInt(req.params.id))
if(index === -1){
   return res.status(404).json({
        success: false ,
        message : `sorry ${req.params.id} not valid`
    })};
    const deleted = user.splice(index , 1);
    res.status(200).json({
        success: true,
        data : deleted
    })
})


app.post("/profile" ,upload.single("image"), (req,res)=>{

res.send(`
    <h2>Image Upload Successful!</h2>
    <a href="/">
      <button>Go Back Home</button>
    </a>
  `);

})






const PORT = process.env.PORT
// Server Create 
app.listen(PORT, ()=>{
    console.log(`server is running http://localhost:${PORT}`)
})

