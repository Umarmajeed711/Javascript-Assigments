

// gender Function 

function gender(){
    let gender = document.querySelector("#gender").value;
   
    if(gender.toLowerCase() == "male"){
        document.querySelector("#genderdiv").innerText = "Good Morning Sir"
    }
    else {
        document.querySelector("#genderdiv").innerText = "Good Morning Ma'am"
    }
}