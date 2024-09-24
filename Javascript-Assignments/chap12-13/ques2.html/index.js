

function submit(){
    let num1 = document.querySelector("#num1").value 
    let num2 = document.querySelector("#num2").value
    
    if(num1 > num2){
     document.getElementById("number").innerText = "num1 is greater than num2"   
    }
    else if(num2 > num1){
        document.getElementById("number").innerText = "num2 is greater than num1"  
    }
    else if(num1 == num2){
        document.getElementById("number").innerText = "num1 is equal to num2"    
    }
}