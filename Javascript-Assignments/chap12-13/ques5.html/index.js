

function submit() {
    password = 12341234;
    let pass = document.querySelector("#pass").value 
    if(pass == ""){
        document.querySelector("#result").innerText = "Please enter your password"
    }
    else if (pass == password){
document.querySelector("#result").innerText = "Correct! The password you entered matches the Original Password."
    }
    else{
        document.querySelector("#result").innerText = "Incorrect password!"
    }
}