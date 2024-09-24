function submit(){
    let num1 = document.querySelector("#num1").value 
    
    if(num1 > 0){
     document.getElementById("number").innerText = "The given number is positive"   
    }
    else if (num1 == 0){
        document.getElementById("number").innerText = "The given number is zero" 
    }
    else {
        document.getElementById("number").innerText = "The given number is negative"   
    }
}