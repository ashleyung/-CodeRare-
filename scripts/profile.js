// Profile Javascript 

function getUserInfo() {
  let myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vbmtleWtpbmciLCJpYXQiOjE2NzQwODE4NjUsImV4cCI6MTY3NDE2ODI2NX0.7-m49KRcgB1KDXf6_7HbNLOwUHvtXIvjosicgN48rz0"
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
      let bio = result.bio;
      let profile_picture = result.profile_picture;
      let posts = result.posts;

      // Insert the information into the appropriate elements in the HTML
      document.getElementById("username").innerHTML = username;
      document.getElementById("user-fullname").innerHTML= fullName;
      document.getElementById("user-bio").innerHTML = bio;
      document.getElementById("user-pic").src = profile_picture;
      document.getElementById("user-posts").innerHTML = posts;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

getUserInfo();

// Creating a Post on Profile Page 

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

function postBtnOnClick() {
      let inputElement = document.getElementById('post');
      let textToPost = inputElement.value;
      let data = { text: textToPost };
    
      let options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": 'application/json',
          "Authorization": `Bearer ${(loginData()).token}`
        },
      };
    
      fetch("https://microbloglite.herokuapp.com/api/posts", options)
        .then(response => {
          console.log(data)
          if (response.ok) {
            inputElement.value = '';
          }
        });
      console.log("Post updating...")
    }