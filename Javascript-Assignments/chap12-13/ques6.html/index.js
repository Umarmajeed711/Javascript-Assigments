

function submit(){
    let time = document.querySelector("#pass").value ;

    if(time >= 0000 && time < 1200){
       document.querySelector("#result").innerText = "Good morning!"
    }
    else if(time >= 1200 && time < 1700){
        document.querySelector("#result").innerText = "Good after noon!"
     }
    else if(time >= 1700 && time < 2100){
        document.querySelector("#result").innerText = "Good evening!"
     }
    else if(time >= 2100 && time < 2399){
        document.querySelector("#result").innerText = "Good night!"
     }
     else{
         document.querySelector("#result").innerText = "please input a correct 4 digit time i.e 1900"
     }
}