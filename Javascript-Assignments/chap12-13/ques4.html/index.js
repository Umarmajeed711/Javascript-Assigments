function submit(){
    let num1 = document.querySelector("#num1").value 
    
    num1 = num1.toLowerCase()
    if(num1 == "a" ||num1 == "e" ||num1 == "i" ||num1 == "o" ||num1 == "u"){
     document.getElementById("number").innerText = "\nTrue!\n The given letter is vowel."    
    }
   
    else {
        document.getElementById("number").innerText = "\nFalse!\nThe given letter is not vowel. "  
    }
}