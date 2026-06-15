let method = document.getElementById("method")
let methodTitle = document.getElementById("methodTitle")
let methodContent = document.getElementById("methodContent")
let methodCode = document.getElementById("methodCode")
let optional = document.getElementById("optional")

let method2 = document.getElementById("method2")
let methodTitle2 = document.getElementById("methodTitle2")
let methodContent2 = document.getElementById("methodContent2")
let methodCode2 = document.getElementById("methodCode2")

let btns = document.getElementsByClassName("btn");


//button active color 
function activeColor(btn){
  btns.array.forEach(element => {
    element.classList.remove("border-2", "border-amber-500");
  });
    btn.classList.add("border-2", "border-amber-500");

};


// helper tool

function optionalHide (){
    optional.classList.add("hidden")
}

function postColorRemove(){
   method.classList.remove("bg-[#483A0F]"); 
}



function simplyGat(){
  activeColor()
    optionalHide ()
    postColorRemove()
   method.innerHTML = "GET ";
     method.classList.remove("bg-[#6287B4]");
   method.classList.add("bg-[#1B4614]");
   methodTitle.innerHTML = "Simple GET Request"
   methodContent.innerHTML = "GET request হলো সার্ভার থেকে শুধু ডেটা পড়ার জন্য ব্যবহৃত HTTP method। এটি কোনো ডেটা পরিবর্তন করে না — শুধু response ফেরত দেয়। Express.js-এ app.get() দিয়ে route তৈরি করা হয়।"

   methodCode.innerHTML = `
<pre>
const express = require('express');
const app = express();

// Simple GET route
app.get('/', (req, res) => {
  res.send('স্বাগতম! এটি একটি GET request।');
});

// JSON response পাঠানো
app.get('/users', (req, res) => {
  res.json({ message: 'সব users পাওয়া গেছে', data: [] });
});

app.listen(3000, () => console.log('Server চালু আছে'));
</pre>
`;

}



function getQuery(){
  activeColor
    postColorRemove()
    optionalHide ()
   method.innerHTML = "GET ";
     method.classList.remove("bg-[#6287B4]");

   method.classList.add("bg-[#1B4614]");
   methodTitle.innerHTML = "GET Request with URL Query Parameter"
   methodContent.innerHTML = "URL-এর পরে ?key=value আকারে ডেটা পাঠানো হয়। একাধিক query parameter থাকলে & দিয়ে জোড়া লাগানো হয়। যেমন: /search?name=Rahim&age=25। এগুলো req.query দিয়ে পাওয়া যায়।"
methodCode.innerHTML = `<pre ">
// URL: GET /search?name=Rahim&city=Dhaka
app.get('/search', (req, res) => {
  const { name, city } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'name দিন' });
  }

  res.json({
    message: \`\${name} কে \${city}-তে খোঁজা হচ্ছে\`,
    query: req.query
  });
});

// URL: GET /products?page=2&limit=10
app.get('/products', (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  res.json({ page, limit, products: [] });
});


</pre>`;

}

function getHeater(){
    postColorRemove()
    optionalHide ()
  method.innerHTML = "GET ";
  method.classList.remove("bg-[#6287B4]");
  method.classList.add("bg-[#1B4614]");
   methodTitle.innerHTML = "GET Request with Headers"
   methodContent.innerHTML = "Header হলো request-এর সাথে পাঠানো extra information, যা URL-এ দেখা যায় না। যেমন: Authorization token, Content-Type, custom API key। req.headers দিয়ে যেকোনো header পড়া যায়। Header নাম সবসময় lowercase হয়।"
methodCode.innerHTML = `<pre ">
// Authorization header check করা
app.get('/profile', (req, res) => {
  const token = req.headers['authorization'];
  const apiKey = req.headers['x-api-key'];

  if (!token) {
    return res.status(401).json({ error: 'Token নেই' });
  }

  res.json({
    message: 'Profile পাওয়া গেছে',
    receivedToken: token
  });
});

/* Client থেকে পাঠানোর উপায়:
fetch('/profile', {
  headers: {
    'Authorization': 'Bearer abc123',
    'x-api-key': 'mykey'
  }
}) */


</pre>`;

}



function Middleware(){
    postColorRemove()
   
  method.innerHTML = "Middleware "; 
  
  method.classList.add("bg-[#6287B4]");
   methodTitle.innerHTML = "Application Middleware (সব route-এ কাজ করে)"
   methodContent.innerHTML = "Middleware হলো এমন function যা request ও response-এর মাঝখানে চলে। app.use() দিয়ে Application Middleware সেট করলে সব route-এ apply হয়। next() না ডাকলে request আটকে যাবে।"
methodCode.innerHTML = `<pre>
/// Logger middleware — সব request log করবে
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next(); // পরবর্তী step-এ যাও
});

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom auth middleware
const checkAuth = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(401).json({ error: 'Login করুন' });
  }
};

</pre>`;




optional.classList.remove("hidden");

method2.innerHTML = "Middleware "; 
  
  method2.classList.add("bg-[#6287B4]");
   methodTitle2.innerHTML = "Application Middleware (সব route-এ কাজ করে)"

   methodContent2.innerHTML = "Route Middleware শুধু নির্দিষ্ট route-এ apply হয়। Route handler-এর আগে function argument হিসেবে দেওয়া হয়। এটি দিয়ে specific route রক্ষা করা যায়।"
   
methodCode2.innerHTML = `<pre>
// শুধু /admin route-এ middleware
app.get('/admin', checkAuth, (req, res) => {
  res.json({ message: 'Admin panel' });
});

// একাধিক middleware একসাথে
const log = (req, res, next) => { console.log('log'); next(); };
const validate = (req, res, next) => { console.log('validate'); next(); };

app.post('/order', log, validate, (req, res) => {
  res.json({ message: 'Order দেওয়া হয়েছে' });
});

</pre>`;

}





function simplePost(){
    
    optionalHide ()
  method.innerHTML = "POST";
  
  method.classList.add("bg-[#483A0F]");
   methodTitle.innerHTML = "Simple POST Request"
   methodContent.innerHTML = "POST request সার্ভারে নতুন ডেটা পাঠানোর জন্য ব্যবহৃত হয়। ডেটা request body-তে থাকে, URL-এ দেখা যায় না। app.post() দিয়ে route তৈরি করা হয় এবং req.body দিয়ে ডেটা পড়া হয়।"
methodCode.innerHTML = `<pre ">
// Body parser আগে set করতে হবে
app.use(express.json());

app.post('/register', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'name ও email দিন' });
  }

  // Database-এ save করার কাজ এখানে হবে
  res.status(201).json({
    message: \`\${name} রেজিস্ট্রেশন সফল হয়েছে\`,
    user: { name, email }
  });
});


</pre>`;

}





function postQuery(){
    optionalHide ()
  method.innerHTML = "POST";
  
  method.classList.add("bg-[#483A0F]");
   methodTitle.innerHTML = "POST Request with URL Query Parameter"
   methodContent.innerHTML = "POST request-এও URL-এ query parameter ব্যবহার করা যায়। এই ক্ষেত্রে URL query (req.query) ও body data (req.body) দুটো আলাদাভাবে পাওয়া যায়। সাধারণত filter বা mode নির্দিষ্ট করতে ব্যবহৃত হয়।"
methodCode.innerHTML = `<pre ">
// URL: POST /message?type=urgent
// Body: { "text": "গুরুত্বপূর্ণ বার্তা" }

app.post('/message', (req, res) => {
  const { type } = req.query;   // URL থেকে
  const { text } = req.body;    // Body থেকে

  res.json({
    messageType: type || 'normal',
    content: text,
    sentAt: new Date().toISOString()
  });
});

</pre>`;

}




function postQuery(){
    optionalHide ()
  method.innerHTML = "POST";
  
  method.classList.add("bg-[#483A0F]");
   methodTitle.innerHTML = "POST Request with URL Query Parameter"
   methodContent.innerHTML = "POST request-এও URL-এ query parameter ব্যবহার করা যায়। এই ক্ষেত্রে URL query (req.query) ও body data (req.body) দুটো আলাদাভাবে পাওয়া যায়। সাধারণত filter বা mode নির্দিষ্ট করতে ব্যবহৃত হয়।"
methodCode.innerHTML = `<pre ">
// URL: POST /message?type=urgent
// Body: { "text": "গুরুত্বপূর্ণ বার্তা" }

app.post('/message', (req, res) => {
  const { type } = req.query;   // URL থেকে
  const { text } = req.body;    // Body থেকে

  res.json({
    messageType: type || 'normal',
    content: text,
    sentAt: new Date().toISOString()
  });
});

</pre>`;

}



function postHeader(){
    optionalHide ()
  method.innerHTML = "POST";
  
  method.classList.add("bg-[#483A0F]");
   methodTitle.innerHTML = "POST Request with Header Properties"
   methodContent.innerHTML = "POST request-এ header দিয়ে authentication token, content type, বা custom information পাঠানো যায়। req.headers দিয়ে সব header পড়া যায়। API security-র জন্য authorization header অনেক গুরুত্বপূর্ণ।"
methodCode.innerHTML = `<pre ">app.post('/create-post', (req, res) => {
  const authHeader = req.headers['authorization'];
  const contentType = req.headers['content-type'];

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token নেই বা ভুল' });
  }

  const token = authHeader.split(' ')[1];
  // Token verify করার code এখানে লিখুন

  res.status(201).json({
    message: 'Post তৈরি হয়েছে',
    receivedToken: token
  });
});

</pre>`;

}


function jsonPost(){
    optionalHide ()
  method.innerHTML = "POST";
  
  method.classList.add("bg-[#483A0F]");
   methodTitle.innerHTML = "POST with application/json"
   methodContent.innerHTML = "JSON হলো সবচেয়ে জনপ্রিয় data format। Client থেকে Content-Type: application/json header পাঠাতে হয়। Express-এ express.json() middleware দিয়ে JSON body automatically parse হয় এবং req.body-তে object হিসেবে পাওয়া যায়।"
methodCode.innerHTML = `<pre ">
// Middleware
app.use(express.json());

app.post('/student', (req, res) => {
  const { name, roll, department } = req.body;

  // Validation
  if (!name || !roll) {
    return res.status(400).json({ success: false, msg: 'ডেটা অসম্পূর্ণ' });
  }

  res.status(201).json({ success: true, student: { name, roll, department } });
});

/* Client থেকে পাঠানো:
fetch('/student', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Karim', roll: 101, department: 'CSE' })
}) */

</pre>`;

}







function fromData(){
    optionalHide ()
  method.innerHTML = "POST";
  
  method.classList.add("bg-[#483A0F]");
   methodTitle.innerHTML = "Multipart Form Data"
   methodContent.innerHTML = "Form থেকে text ও file একসাথে পাঠাতে multipart/form-data ব্যবহৃত হয়। Express নিজে এটি parse করতে পারে না — multer package লাগে। HTML form-এ enctype=\"multipart/form-data\" দিতে হয়।"
methodCode.innerHTML = `<pre ">
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// .fields() দিয়ে text + file একসাথে
app.post('/submit-form',
  upload.fields([{ name: 'photo', maxCount: 1 }]),
  (req, res) => {
    const { username, email } = req.body;  // text fields
    const photo = req.files?.['photo']?.[0];  // file

    res.json({
      username,
      email,
      photoName: photo?.originalname || 'কোনো ছবি নেই'
    });
  }
);
</pre>`;

}



function fileUpload(){
    optionalHide ()
  method.innerHTML = "POST";
  
  method.classList.add("bg-[#483A0F]");
   methodTitle.innerHTML = "File Upload"
   methodContent.innerHTML = "File upload করতে multer package ব্যবহার হয়। File type filter, file size limit, এবং custom file name সেট করা যায়। req.file (single) বা req.files (multiple) দিয়ে uploaded file info পাওয়া যায়।"
methodCode.innerHTML = `<pre ">
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('শুধু ছবি আপলোড করুন'));
  }
});

app.post('/upload', upload.single('avatar'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'ফাইল দিন' });
  res.json({ filename: req.file.filename, size: req.file.size });
});
</pre>`;

}

// double

function fileUpload(){
  method.innerHTML = "POST";
  
  method.classList.add("bg-[#483A0F]");
   methodTitle.innerHTML = "File Upload"
   methodContent.innerHTML = "File upload করতে multer package ব্যবহার হয়। File type filter, file size limit, এবং custom file name সেট করা যায়। req.file (single) বা req.files (multiple) দিয়ে uploaded file info পাওয়া যায়।"
methodCode.innerHTML = `<pre ">
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('শুধু ছবি আপলোড করুন'));
  }
});

app.post('/upload', upload.single('avatar'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'ফাইল দিন' });
  res.json({ filename: req.file.filename, size: req.file.size });
});
</pre>`;

}



function useCas(){
  method.innerHTML = "GET ব্যবহার করুন যখন "; 
  
  method.classList.remove("bg-[#6287B4]");
   methodTitle.innerHTML = "GET কখন ব্যবহার করবেন?"
   methodContent.innerHTML = `<ul>
   <li>কোনো তালিকা বা তথ্য দেখাতে চাইলে — যেমন: সব products দেখানো, user profile দেখানো</li>
   <li>Search করতে চাইলে — যেমন: নাম দিয়ে user খোঁজা, filter করা</li>
   <li>Link share বা bookmark করার দরকার হলে</li>
   <li>ডেটা সার্ভারে পরিবর্তন হবে না এমন ক্ষেত্রে </li>
   </ul>`
methodCode.innerHTML = `<pre>
// ✅ GET-এর সঠিক ব্যবহার
app.get('/products', getAllProducts);       // সব product
app.get('/products/:id', getProductById);   // একটি product
app.get('/search?q=laptop', searchProduct);  // search

</pre>`;




optional.classList.remove("hidden");

method2.innerHTML = "POST ব্যবহার করুন যখন "; 
  
  method.classList.add("bg-[#483A0F]");
   methodTitle2.innerHTML = "POST কখন ব্যবহার করবেন?"

   methodContent2.innerHTML = `<ul>
   <li>নতুন ডেটা তৈরি করতে — যেমন: নতুন user register করা, নতুন post তৈরি করা</li>
   <li>Password, credit card number বা sensitive data পাঠাতে</li>
   <li>File upload করতে</li>
   <li>Form submit করতে</li>
   <li>অনেক বড় ডেটা পাঠাতে (JSON, XML)</li>
   
   </ul>`
   
methodCode2.innerHTML = `<pre>
// ✅ POST-এর সঠিক ব্যবহার
app.post('/register', createUser);    // নতুন user
app.post('/login', loginUser);        // login (password)
app.post('/upload', uploadFile);      // file upload
</pre>`;

}
