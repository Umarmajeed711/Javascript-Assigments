

// Traffic lights

function light(){

    let light = document.querySelector("#light").value;
    if(light.toLowerCase() == "red"){
        document.querySelector("#traffic").innerText = "Must Stop";
    }
    else if(light.toLowerCase() == "yellow"){
        document.querySelector("#traffic").innerText = "Ready to move";
    }
    else if(light.toLowerCase() == "green"){
        document.querySelector("#traffic").innerText = "Move now";
    }
    else{
        document.querySelector("#traffic").innerText = "Invalid color"
    }
}