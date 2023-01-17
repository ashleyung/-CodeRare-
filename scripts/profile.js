// Profile Javascript 

// function getUserInfo (){
//     let myHeaders = new Headers();
//   myHeaders.append("accept", "application/json");
//   myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3MzU2NDU5NiwiZXhwIjoxNjczNjUwOTk2fQ.k4q_QCw48ew_zbBF6qtlNq25dhA9Oa6H1bOyNKT1LBE");
  
//   let requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//   };
  
//   fetch("https://microbloglite.herokuapp.com/api/users/string", requestOptions)
//     .then(response => response.text())
//     .then(result =>   document.getElementById("user-profile").innerHTML=result);
  
//   }
  
//   getUserInfo();

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
    .then((response) => response.text())
    .then((result) => (document.getElementById("user-profile").innerHTML = result));
}

getUserInfo();
