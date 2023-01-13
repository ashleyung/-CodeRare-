/* Landing Page JavaScript */

"use strict";

const loginForm = document.querySelector("#login");

loginForm.onsubmit = function (event) {
    // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered:
    event.preventDefault();

    // We can use loginForm.username (for example) to access
    // the input element in the form which has the ID of "username".
    const loginData = {
        username: loginForm.username.value,
        password: loginForm.password.value,
    }

    // Disables the button after the form has been submitted already:
    loginForm.loginButton.disabled = true;

    // Time to actually process the login using the function from auth.js!
    login(loginData);
};

// Registration Page Javascript 

 // Add event listener to form
 const form = document.getElementById("register-form");
 form.addEventListener("submit", handleSubmit);

 function handleSubmit(event) {
   event.preventDefault();

   // Get values of input fields
   const email = document.getElementById("email").value;
   const password = document.getElementById("psw").value;
   const repeatPassword = document.getElementById("psw-repeat").value;

   // Check if passwords match
   if (password !== repeatPassword) {
     alert("Passwords do not match. Please try again.");
     return;
   }

   // Create body object for fetch request
   const userData = {
     email: email,
     password: password
   };

   // Perform fetch request
   fetch("https://microbloglite.herokuapp.com/api/users", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(userData)
   })
     .then(response => {
       if (response.status === 201) {
         // registration was successful
         alert("Registration Successful! You will now be redirected to the login page.");
         return window.location.href = '/login';
       } else {
         // registration was not successful
         throw new Error("Registration failed");
       }
     })
     .catch(error => {
       console.error(error);
       alert("An error occurred during registration. Please try again later.");
     });
 }

//  REFERENCE CODE FROM REMSY * TO LOOK AT LATER 

// function register(registerData) {
//   // POST /auth/login
//   var myHeaders = new Headers();
//   myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3MzQ2NzM5NCwiZXhwIjoxNjczNTUzNzk0fQ.6mDATbufXM_5rRzSseX2A_J1YvmPh_HEVYmEqIw6GA4");
//   myHeaders.append("Content-Type", "application/json");
  
//   // var raw = JSON.stringify({
//   //   "username": "remsey3",
//   //   "fullName": "Remsey Mailjard",
//   //   "password": "test"
//   // });
  
//   var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: JSON.stringify(registerData),
//     redirect: 'follow'
//   };

//   fetch("https://microbloglite.herokuapp.com/api/users", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
//   fetch(api + "/api/users", requestOptions)
//     .then((response) => response.json())
//     .then((result) => {
//       alert('this was succesfull');
//       console.log(result);
//       window.localStorage.setItem(
//         "register-data",
//         JSON.stringify(registerData)
//       );
//       window.location.assign("index.html"); // redirect
//     })
//     .catch((error) => console.log("error", error));
// }

// Profile Javascript 

function getUserInfo (){
  let myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3MzU2NDU5NiwiZXhwIjoxNjczNjUwOTk2fQ.k4q_QCw48ew_zbBF6qtlNq25dhA9Oa6H1bOyNKT1LBE");

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://microbloglite.herokuapp.com/api/users/string", requestOptions)
  .then(response => response.text())
  .then(result =>   document.getElementById("user-profile").innerHTML=result);

}

getUserInfo();