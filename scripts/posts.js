/* Posts Page JavaScript */

"use strict";

function SendPost() {
  alert("function activated");

  const message = document.getElementById("myPost").value;

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer " + getLoginData().token
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    text: message,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
    .then((response) => response.text())
    .then((result) => alert(result))
    .catch((error) => console.log("error", error));
}

function GetAllPost() {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer " + getLoginData().token
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    text: "This is a post about JavaScript",
  });

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  let myresults = document.getElementById("results");
  fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
    .then((response) => response.text())
    .then((result) => (myresults.innerHTML += result))
    .catch((error) => console.log("error", error));
}
GetAllPost();
