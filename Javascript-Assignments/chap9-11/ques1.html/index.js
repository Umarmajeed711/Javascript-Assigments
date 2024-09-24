


// city function
function city(){
    let city = document.querySelector("#city").value;
    
    if(city.toLowerCase() == "karachi"){
        document.querySelector("#cityName").innerText = "Welcome to the city of Lights";
    }
    else{
        document.querySelector("#cityName").innerText = "Welcome to the " + city;
    }
    }