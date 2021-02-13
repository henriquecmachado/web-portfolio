// Get Element ID's from HTML File


// Multiply Calculation
function multiplyCalc() {
    const first = parseFloat(document.getElementById("first-number").value); 
    const second = parseFloat(document.getElementById("second-number").value); 

    let calculation = first * second; 

    if(isNaN(calculation)) {
        return document.getElementById("result").innerHTML = ""; 
    } else {
        return document.getElementById("result").innerHTML = calculation; 
    }
}

// Divide Calculation

function divideCalc() {
    const first = parseFloat(document.getElementById("first-number").value); 
    const second = parseFloat(document.getElementById("second-number").value); 

    let calculation = first / second; 

    if(isNaN(calculation)) {
        return document.getElementById("result").innerHTML = ""; 
    } else {
        return document.getElementById("result").innerHTML = calculation; 
    }
}


//Add calc
function addCalc() {
    const first = parseFloat(document.getElementById("first-number").value); 
    const second = parseFloat(document.getElementById("second-number").value); 

    let calculation = first + second; 

    if(isNaN(calculation)) {
        return document.getElementById("result").innerHTML = ""; 
    } else {
        return document.getElementById("result").innerHTML = calculation; 
    }
}


function subtractCalc() {
    const first = parseFloat(document.getElementById("first-number").value); 
    const second = parseFloat(document.getElementById("second-number").value); 

    let calculation = first - second; 

    if(isNaN(calculation)) {
        return document.getElementById("result").innerHTML = ""; 
    } else {
        return document.getElementById("result").innerHTML = calculation; 
    }
}

// Clear Input Fields 

function clearFields(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = ""
}


