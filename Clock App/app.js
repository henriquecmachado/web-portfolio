// Write a Javascript Program that show the Date and the Hours in this format
// Today is: Tuesday; 
// Current time is: 10:30:38
//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

const todayIsText = "Today is: "; 
const currentTimeIs = "Current Time is: "; 


function displayTodayDate() {
    const date = new Date(); 
    const todayIs = date.getDay(); 

    //conditions
    if(todayIs == 6){
        const today = "Saturday"; 
        document.getElementById("day").innerHTML = today; 
    } else if (todayIs == 7) {
        const today = "Sunday"; 
        document.getElementById("day").innerHTML = today
    } else if (todayIs == 1) {
        const today = "Monday"; 
        document.getElementById("day").innerHTML = today
    } else if (todayIs == 2) {
        const today = "Tuesday"; 
        document.getElementById("day").innerHTML = today
    } else if (todayIs == 3) {
        const today = "Wednesday"; 
        document.getElementById("day").innerHTML = today
    } else if (todayIs == 4) {
        const today = "Thursday"; 
        document.getElementById("day").innerHTML = today
    } else if (todayIs == 5) {
        const today = "Friday"; 
        document.getElementById("day").innerHTML = today
    } 
}


function displayHours() {
    const date = new Date(); 
    const hours = date.getHours(); 
    const minutes = date.getMinutes(); 
    const seconds = date.getSeconds(); 

    const display = `${hours}: ${minutes} :${seconds}`; 

    document.getElementById("hours").innerHTML =  display;
}

displayTodayDate()
displayHours()
