// Profile Javascript 

// function getUserInfo() {
//   let myHeaders = new Headers();
//   myHeaders.append("accept", "application/json");
//   myHeaders.append(
//     "Authorization",
//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vbmtleWtpbmciLCJpYXQiOjE2NzM5OTM4ODUsImV4cCI6MTY3NDA4MDI4NX0.Pdo5f3gr7J1iZbBoz4iBXkduyOIxLKJxqB0uMvJUFhE"
//   );

//   let requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch("https://microbloglite.herokuapp.com/api/users/monkeyking", requestOptions)
//     .then((response) => response.text())
//     .then((result) => (document.getElementById("user-profile").innerHTML = result));
// }

// getUserInfo();

function getUserInfo() {
  let myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vbmtleWtpbmciLCJpYXQiOjE2NzM5OTM4ODUsImV4cCI6MTY3NDA4MDI4NX0.Pdo5f3gr7J1iZbBoz4iBXkduyOIxLKJxqB0uMvJUFhE"
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
      let bio = result.bio;
      let profile_picture = result.profile_picture;
      let posts = result.posts;

      // Insert the information into the appropriate elements in the HTML
      document.getElementById("username").innerHTML = username;
      document.getElementById("user-bio").innerHTML = bio;
      document.getElementById("user-pic").src = profile_picture;
      document.getElementById("user-posts").innerHTML = posts;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

getUserInfo();

