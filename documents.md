=================  Express.js ======================= 
Express.js হলো Node.js এর জন্য একটি fast এবং lightweight web framework 

Express.js diye ki ki kora jay 

Web server বানানো
REST API তৈরি করা
Route handle করা (যেমন /home, /about)
Request & Response manage করা
Middleware use করা 

why use Express js 

1. Express js symbol very easy 
2. Routing System সহজে handle করা যায় 
3. custom  middlewer বানানো যায় 
4. REST API বানানো যায় 
5. বড় project সহজে স্কেল করা যায় 


Express.js Setup করা 

first time Check করবে আমরা আমদের dives এ Node.js and NPM Install আছে কি না যদি থাকে তাহলে ঠিক আছে যদি না থাকে তাহলে install করে নিব

2nd
npm init -y এইটা দিয়ে package.json file তৈরি করবে যেইটায় সব package er info থাকে verson thale suru kore sob kisu thake package.json file তৈরি করবে। 

npm install express দিয়ে express install করে নিব তারপর আমরা ছোট একটা server Create করব express diye index.js file a 

index. js file call express.js requre(Expres.js)

================= Postman =================== 

Postman হল API testing tool 

Express js দিয়ে আমরা যেখন কোন backEnad banbo তখন browser ছাড়াই API request পাঠিয়ে test করতে Postman ব্যবহার করা হয় 

Postman দিয়ে কী কী করা যায়? 
1. get request
2. post request 
3. PUT/PATCH Request
4. DELETE Request

json data দেখান বা পাঠান যায় header set and tockend পাঠানো যায় 

postmen 2 ভাবে ব্যবহার করা যায় ১ web verson web a korle desktop agent install করতে হয় ২ download  

https://www.postman.com/downloads/   

এই links থেকে windos বা mac er জন্য download করে setup kore nite hbe 



same amn bruno API 


https://www.usebruno.com/

================== Express Routing =========================

routing হল কোন url a requres পাঠালে কি respones করবে তা নির্ধারণ করে server 

যেমন / a থাকলে কি দেখাবে এবং /about url a কি দেখাবেserver তা ঠিক করে index.js fila a dakhi 


================ dynamic Routing ===============================
dynamic routing হল এমন একটা রউট যে পরিবতনশিল  যে কন হইতা পারে আর সেই value route থেকে ধরে ব্যবহার করা হল dynamic routing 

আমরা মনে করি আমদের একটা ক্লাস আছে সেইখানে অনেক গুলা স্টুডেন্ট আছে এখন ত আমরা সবার অন্য আলাদা আলাদে করে routing বানাব না তাই তখন একটা dynamic route crete korbo 

dynamic route create kore সময় url er sane :দিয়ে একটা unic name or id দিতে হবে মনে রাখতে হবে সামে নামে জেন হয় ভিতর  এ এবং বাইরে 



=============== url query ========================== 

Query String মানে হলো URL-এর শেষে ? দিয়ে যে extra information পাঠানো হয়। 

example : /search?name=rahim&age=25
                   ↑           ↑
                 key=value   আরেকটা key=value

? পরে যা থালে সেইটা হলিও key and = এর পর কী ভালু 



===================== request and response =====================================================

expres js er routing er main হল request and response 

request  (req) object কি ?

Request হলো Client (Browser, Postman) থেকে Server-এর কাছে পাঠানো তথ্য বা অনুরোধ। Express.js-এ এই Request Object-কে req দ্বারা প্রকাশ করা হয়।

req object ভিতর থাকে 
১, ইউজার এর পাঠানো ডাটা 
২। URL and rout 
৩। HTTP মেথড (get , post , delet , fech ...)
৪। header browser info 
৫। query parameters (যেমন search ? name=sofik)
৬। Body Data (from and json)


=========================== response ============================================
response (res) object কি ?

Response হলো ক্লায়েন্টের (Client) পাঠানো Request-এর বিপরীতে সার্ভার (Server) যে উত্তর বা তথ্য ফেরত পাঠায় তাকে Response বলে। 

response হিসেবে আমরা যা যা data পাঠাইতে পারি 
 1. HTML
 2. TEXT
 3. JSON
res.json{
    name : sofik
}
 4. file 
 5. rederice 

========================= response status code =========================

Common Status Codes
Code                  মানে                      কখন ব্যবহার
200                   OK                    সফলভাবে পাওয়া গেছে
201                  Created                নতুন data তৈরি হয়েছে
400                 Bad Request                ভুল input
401                 Unauthorized             লগইন করোনি
403                Forbiddenpermission        নেই
404                Not Found                 পাওয়া যায়নি
500                Server Error               server-এ সমস্যা


Response Status Code হলো সার্ভার কর্তৃক ক্লায়েন্টকে পাঠানো একটি ৩-সংখ্যার HTTP কোড, যা request-এর ফলাফল বা অবস্থা নির্দেশ করে।


======================== sending HTML and Json Data ===================
আমরা যদি html File response দেখাতে চাই তাহলে res.send(এর ভিতরে HTML code লিখতে পারি ) 
যদি json data response দেখাতে চাই তাহলে res.JSON(
    name = "sofik"
    age = 40
    prof = "devlopre"
)



GET, POST, PUT, PATCH, এবং DELETE হলো মূল HTTP রিকোয়েস্ট মেথড, যা ওয়েব সার্ভারের সাথে যোগাযোগ করতে এবং RESTful API-এরমধ্যে ডেটা পরিচালনা করতে ব্যবহৃত হয় । এগুলো সরাসরি CRUD (Create, Read, Update, Delete) ডেটা অপারেশনের সাথে সম্পর্কিত।

GET --- Read সার্ভার থেকে কোনো তথ্য বা ফাইল (যেমন HTML পেজ, JSON ডেটা) খুঁজে বের করে আনা।

POST --- New Data Create আমরা নতুন ডাটা বানাতে চাইলে post method use করি 

post নতুন JSON ডাটা পাঠানোর সময় মনে রাখে থে app.use(express.json()) call আছে কি না যদি না থাকে তাহলে json call ta asbe na 
postman post json data sending rule 1. select body 2. select raw and json data example {
    "Name": "sofik",
    "Email": "sofik@gmail.com",
    "Mobile": "01315116027"
}
send data 

Post Method কখন ব্যবহার করবে:

নতুন user register → POST /register
নতুন post তৈরি → POST /posts
Login → POST /login


======================= put =========================== 

put------- PUT হলো একটি HTTP Method যা existing resource/data-কে update বা replace করার জন্য ব্যবহৃত হয়।

postman a update করার সময়ে body থেকে ডাটা দিতে হবে এবং সেই ডাটা টা update and edite করা যায় 

============================ delete ==========================

delete হল কোন ডাটা কে delete করতে চাইলে delete method use করি 


============ nodemon  ==================================

Nodemon হলো একটি development tool যা Node.js application-এর source code পরিবর্তন হলে স্বয়ংক্রিয়ভাবে server restart করে, ফলে developer-কে বারবার manually server restart করতে হয় না।

setup 
যদি সধু প্রোজেক্ট ১ টায় চাই তাহলে 
Project এ install
npm install --save-dev nodemon

all file install npm install -g nodemon

তারপর package.json 

{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}

npm run dev dile all time colte takbe ?



