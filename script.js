let adminUsername="manoj";
let adminPassword="1234";
let totalProducts=15;
let totalSales=15000;
let users=[
{id:1,name:"Manoj",email:"manoj@gmail.com",age:22},
{id:2,name:"Kavinaya",email:"kavi@gmail.com",age:18},
{id:3,name:"Tamilzhini",email:"tamil@gmail.com",age:1}
];
let products=[
{id:1,name:"Cricket bat",price:5000,stock:10},
{id:2,name:"volley ball",price:2500,stock:15},
{id:3,name:"Football",price:2000,stock:20}
];
showLogin();
function showLogin(){
document.getElementById("app").innerHTML=`
<div class="container min-vh-100 d-flex justify-content-center align-items-center">
<div class="card shadow p-4" style="width:400px;">
<h2 class="text-center mb-4">Login Page</h2>
<input type="text" id="username" class="form-control mb-3" placeholder="Enter username">
<input type="password" id="password" class="form-control mb-3" placeholder="Enter password">
<button class="btn btn-primary w-100" onclick="login()">Login</button>
<p id="message" class="text-danger text-center mt-3"></p>
</div>
</div>`;
}
function login(){
let enteredUsername=document.getElementById("username").value;
let enteredPassword=document.getElementById("password").value
if(enteredUsername===adminUsername&&enteredPassword===adminPassword){
showWelcome();
}else{
document.getElementById("message").innerHTML="Wrong username or password";
}
}
function showWelcome(){
document.getElementById("app").innerHTML=`
<div class="container text-center mt-5">
<h3>Welcome Manoj!</h3>
<p>You have successfully logged in.</p>
</div>`;
setTimeout(function(){
showDashboard();
},1000);
}
function showDashboard(){
document.getElementById("app").innerHTML=`
<div class="container-fluid">
<div class="row min-vh-100">
<div class="col-md-3 col-lg-2 bg-dark text-white p-4 sidebar">
<h3>My Dashboard</h3>
<hr>
<button class="btn btn-dark text-white w-100 text-start mb-2" onclick="showHome()">Dashboard</button>
<button class="btn btn-dark text-white w-100 text-start mb-2" onclick="showUsers()">Users</button>
<button class="btn btn-dark text-white w-100 text-start mb-2" onclick="showProducts()">Products</button>
<button class="btn btn-dark text-white w-100 text-start mb-2" onclick="showSettings()">Settings</button>
<button class="btn btn-danger w-100 text-start" onclick="logout()">Logout</button>
</div>
<div class="col-md-9 col-lg-10 p-4" id="mainContent"></div>
</div>
</div>`;
showHome();
}
function showHome(){
document.getElementById("mainContent").innerHTML=`
<h1 class="mb-4">Dashboard</h1>
<h4>Welcome Manoj!</h4>
<p class="text-muted">You have successfully logged in.</p>
<div class="row mt-4">
<div class="col-md-4 mb-3">
<div class="card shadow p-3">
<h5>Total Users</h5>
<h2>${users.length}</h2>
</div>
</div>
<div class="col-md-4 mb-3">
<div class="card shadow p-3">
<h5>Total Products</h5>
<h2>${totalProducts}</h2>
</div>
</div>
<div class="col-md-4 mb-3">
<div class="card shadow p-3">
<h5>Total Sales</h5>
<h2>₹${totalSales}</h2>
</div>
</div>
</div>`;
}
function showUsers(){
document.getElementById("mainContent").innerHTML=`
<h1 class="mb-4">Users</h1>
<div class="card p-4 mb-4">
<h5>Add User</h5>
<div class="row">
<div class="col-md-4 mb-2">
<input type="text" id="newUserName" class="form-control" placeholder="Enter name">
</div>
<div class="col-md-4 mb-2">
<input type="email" id="newUserEmail" class="form-control" placeholder="Enter email">
</div>
<div class="col-md-4 mb-2">
<input type="number" id="newUserAge" class="form-control" placeholder="Enter age">
</div>
</div>
<button class="btn btn-primary" onclick="addUser()">Add User</button>
<p id="userMessage" class="text-danger mt-2"></p>
</div>
<table class="table table-bordered table-striped table-hover">
<thead class="table-dark">
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Age</th>
<th>Action</th>
</tr>
</thead>
<tbody>
${users.map(function(user){
return`
<tr>
<td>${user.id}</td>
<td>${user.name}</td>
<td>${user.email}</td>
<td>${user.age}</td>
<td>
<button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Delete</button>
</td>
</tr>`;
}).join("")}
</tbody>
</table>`;
}
function addUser(){
let name=document.getElementById("newUserName").value;
let email=document.getElementById("newUserEmail").value;
let age=document.getElementById("newUserAge").value;
if(name===""||email===""||age===""){
document.getElementById("userMessage").innerHTML="Please enter all details";
return;
}
let newId=users.length===0?1:Math.max(...users.map(function(user){return user.id;}))+1;
users.push({
id:newId,
name:name,
email:email,
age:age
});
showUsers();
}
function deleteUser(id){
let confirmDelete=confirm("Do you want to delete this user?");
if(confirmDelete){
users=users.filter(function(user){
return user.id!==id;
});
showUsers();
}
}
function showProducts(){
document.getElementById("mainContent").innerHTML=`
<h1 class="mb-4">Products</h1>
<table class="table table-bordered table-striped table-hover">
<thead class="table-dark">
<tr>
<th>ID</th>
<th>Product</th>
<th>Price</th>
<th>Stock</th>
</tr>
</thead>
<tbody>
${products.map(function(product){
return`
<tr>
<td>${product.id}</td>
<td>${product.name}</td>
<td>₹${product.price}</td>
<td>${product.stock}</td>
</tr>`;
}).join("")}
</tbody>
</table>`;
}
function showSettings(){
document.getElementById("mainContent").innerHTML=`
<h1 class="mb-4">Settings</h1>
<div class="card p-4" style="max-width:500px;">
<h5>Account Settings</h5>
<label class="form-label mt-3">Username</label>
<input type="text" id="settingsUsername" class="form-control" value="${adminUsername}">
<label class="form-label mt-3">New Password</label>
<input type="password" id="settingsPassword" class="form-control">
<button class="btn btn-primary mt-3" onclick="saveSettings()">Save Settings</button>
<p id="settingsMessage" class="text-success mt-3"></p>
</div>`;
}
function saveSettings(){
let newUsername=document.getElementById("settingsUsername").value;
let newPassword=document.getElementById("settingsPassword").value;
if(newUsername!==""){
adminUsername=newUsername;
}
if(newPassword!==""){
adminPassword=newPassword;
}
document.getElementById("settingsMessage").innerHTML="Settings saved successfully!";
}
function logout(){
showLogin();
}