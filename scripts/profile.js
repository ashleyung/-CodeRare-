// Profile Javascript 

function getUserInfo() {
  let myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vbmtleWtpbmciLCJpYXQiOjE2NzQxNjgzMjQsImV4cCI6MTY3NDI1NDcyNH0.8K0BJFGrhGdTtM539PMbv22A7eeohVm2TTIJLUq7Y_c"
  );

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://microbloglite.herokuapp.com/api/users/monkeyking", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // Extract the relevant information from the API response
      let username = result.username;
      let fullName = result.fullName;
      let about = result.about;
      let profile_picture = result.profile_picture;
      let posts = result.posts;

      // Insert the information into the appropriate elements in the HTML
      document.getElementById("username").innerHTML = username;
      document.getElementById("user-fullname").innerHTML= fullName;
      document.getElementById("user-about").innerHTML = about;
      document.getElementById("user-pic").src = profile_picture;
      document.getElementById("user-posts").innerHTML = posts;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

getUserInfo();

// Creating a Post on Profile Page 

function SendPost() {

  alert("function activated");

  const message = document.getElementById("post-content").value;

  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vbmtleWtpbmciLCJpYXQiOjE2NzQxNjgzMjQsImV4cCI6MTY3NDI1NDcyNH0.8K0BJFGrhGdTtM539PMbv22A7eeohVm2TTIJLUq7Y_c"
  );
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    text: message,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
  .then((response) => response.json()) 
  .then((data) => {
      // code to display the post data on the page
      const postContainer = document.getElementById("post-container");
const newPost = document.createElement("div");
newPost.classList.add("post");
newPost.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.text}</p>
`;
postContainer.appendChild(newPost);

  })
  .catch((error) => console.log("error", error));
}


const form = document.getElementById("create-post-form")
form.addEventListener("submit",function (e){ 
   e.preventDefault()
   SendPost();

})

// function createPost (){
//   let myHeaders = new Headers();
// myHeaders.append("accept", "application/json");
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vbmtleWtpbmciLCJpYXQiOjE2NzQwNjQzMTksImV4cCI6MTY3NDE1MDcxOX0.kUa8dWhMg4884FDaJ85pQTlek7tG3sg6T56EZALRtsA");
// myHeaders.append("Content-Type", "application/json");

// let raw = JSON.stringify({
//   "text": "good morning to the monkey king"
// });

// let requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   document.getElementById("create-post-form").innerHTML= form;
//   document.getElementById("post-title").innerHTML= title;
//   document.getElementById("post-content").innerHTML= content;

// }

// .catch((error) => {
//   console.log("Error: ", error);
  
//  });
// }

// createPost();

// function createPost(event) {
//   console.log("SubmitEvent")
//   event.preventDefault()
//   let title = document.getElementById("post-title").value;
//   let content = document.getElementById("post-content").value;

//   let myHeaders = new Headers();
//   myHeaders.append("accept", "application/json");
//   myHeaders.append(
//     "Authorization",
//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vbmtleWtpbmciLCJpYXQiOjE2NzQwNjQzMTksImV4cCI6MTY3NDE1MDcxOX0.kUa8dWhMg4884FDaJ85pQTlek7tG3sg6T56EZALRtsA"
//   );
//   myHeaders.append("Content-Type", "application/json");

//   let raw = JSON.stringify({
//     title: title,
//     content: content
//   });

//   let requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow",
//   };

//   fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       //Create a new div to display the post
//       const postDiv = document.createElement("div");
//       postDiv.classList.add("post");
//       // Append the post title and content to the div
//       postDiv.innerHTML = `<h2>${data.title}</h2><p>${data.content}</p>`;
//       // Append the post div to the HTML
//       document.getElementById("posts").appendChild(postDiv);

//       const form = document.getElementById("create-post-form");
//     form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     createPost();
// });
//     })
//     .catch((error) => {
//       console.log("Error: ", error);
//     });
// }


// ROSE POST FUNCTION
// function postBtnOnClick() {
// let inputElement = document.getElementById('post-content');
// let textToPost = inputElement.value;
// let data = { text: textToPost };

// let options = {
//   method: 'POST',
//   body: JSON.stringify(data),
//   headers: {
//   "Content-Type": 'application/json',
//  "Authorization": `Bearer ${(loginData()).token}`
//  },
//   };
  
//   fetch("https://microbloglite.herokuapp.com/api/posts", options)
// .then(response => {
//   console.log(data)
//  if (response.ok) {
//   inputElement.value = '';
//   }
//   });
// console.log("Post updating...")
//   }

