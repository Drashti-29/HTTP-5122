/// LAB 1 assignment for variables and pop-up intro
// alert msg for welcome to page
window.alert("Hello World!");

var age = window.prompt("Enter your current age: "); // ask user to enter age
var days = 365; 
var totalDays = age * days; // variable to store total days 

window.alert(totalDays); // display to user
var startMsg = "I am "
var endMsg = " days old…more or less";
window.alert(startMsg + totalDays + endMsg); // alert msg  for user age dispay in days