let regestationFormEle = document.getElementById("regestation-form");
let nameElement = document.getElementById("name");
let collegeNameElement = document.getElementById("college-name");
let gendereElement = document.getElementById("gendere");
let emailElement = document.getElementById("email");
let phoneElement = document.getElementById("phone");
let courseElement = document.getElementById("course");

regestationFormEle.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registration successful!");
})