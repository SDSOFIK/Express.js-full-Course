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