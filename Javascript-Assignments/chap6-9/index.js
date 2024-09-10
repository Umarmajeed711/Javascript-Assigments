//promt

let pro = prompt("What's your name?", "Umar");
document.getElementById("hello").innerText = pro;

//Function 1

function submit() {
  let number = document.querySelector("#number").value;

  let a = "Result:" + "\n" + "The value of a is " + number;

  let preincrement = "The value of ++a is " + ++number;
  let result1 = "The value of a is " + number;

  let postincrement = "The value of a++ is " + number++;
  let result2 = "The value of a is " + number;

  let predecrement = "The value of --a is " + --number;
  let result3 = "The value of a is " + number;

  let postdecrement = "The value of a-- is " + number--;
  let result4 = "The value of a is " + number;

  let result =
    a +
    "\n" +
    "\n" +
    preincrement +
    "\n" +
    result1 +
    "\n" +
    "\n" +
    postincrement +
    "\n" +
    result2 +
    "\n" +
    "\n" +
    predecrement +
    "\n" +
    result3 +
    "\n" +
    "\n" +
    postdecrement +
    "\n" +
    result4;
  document.querySelector("#result").innerText = result;
}

//function 2

function submit2() {
  let number1 = document.querySelector("#number1").value;
  document.querySelector("#a").innerText = number1;
  let number2 = document.querySelector("#number2").value;
  document.querySelector("#b").innerText = number2;
  let result = --number1 - --number1 + ++number2 + number2--;
  document.querySelector("#c").innerText = result;
}

// greeting function

function submit3() {
  let name = document.querySelector("#name").value;
  document.querySelector("#user").innerText = name;
}

// Table Generator Function

function submit4() {
  let table = document.querySelector("#table").value;
  document.querySelector("#tableno").innerText = table;

  let tabler1 = table * 1;
  document.querySelector("#tabler1").innerText = tabler1;
  let tabler2 = table * 2;
  document.querySelector("#tabler2").innerText = tabler2;
  let tabler3 = table * 3;
  document.querySelector("#tabler3").innerText = tabler3;
  let tabler4 = table * 4;
  document.querySelector("#tabler4").innerText = tabler4;
  let tabler5 = table * 5;
  document.querySelector("#tabler5").innerText = tabler5;
  let tabler6 = table * 6;
  document.querySelector("#tabler6").innerText = tabler6;
  let tabler7 = table * 7;
  document.querySelector("#tabler7").innerText = tabler7;
  let tabler8 = table * 8;
  document.querySelector("#tabler8").innerText = tabler8;
  let tabler9 = table * 9;
  document.querySelector("#tabler9").innerText = tabler9;
  let tabler10 = table * 10;
  document.querySelector("#tabler10").innerText = tabler10;
}

// Percentage Calculator Fucntion

function submit5() {
  // math Total
  let input1 = document.querySelector("#input1").value;
  document.querySelector("#mathT").innerText = input1;

  // math Obtained
  let input2 = document.querySelector("#input2").value;
  document.querySelector("#mathO").innerText = input2;

  // math Percentage
  let math = (input2 / input1) * 100;
  document.querySelector("#mathP").innerText = math + " %";

  // Physics Total
  let input3 = document.querySelector("#input3").value;
  document.querySelector("#physicsT").innerText = input3;

  // Physics Obtained
  let input4 = document.querySelector("#input4").value;
  document.querySelector("#physicsO").innerText = input4;

  // Physics Percentage
  let physics = (input4 / input3) * 100;
  document.querySelector("#physicsP").innerText = physics + " %";

  // Chemistry Total
  let input5 = document.querySelector("#input5").value;
  document.querySelector("#cheT").innerText = input5;

  // Chemistry Obtained
  let input6 = document.querySelector("#input6").value;
  document.querySelector("#cheO").innerText = input6;

  // Chemistry Percentage
  let che = (input6 / input5) * 100;
  document.querySelector("#cheP").innerText = che + " %";

  // Total marks
  let subjectTotal = Number(input1) + Number(input3) + Number(input5);
  document.querySelector("#allT").innerText = subjectTotal;

  // Total marks
  let subjectObtained = Number(input2) + Number(input4) + Number(input6);
  document.querySelector("#allO").innerText = subjectObtained;

  // Total Percentage
  let totalMarks = Number(input1) + Number(input3) + Number(input5);
  let Obtmarks = Number(input2) + Number(input4) + Number(input6);

  let totalPercentage = (Obtmarks / totalMarks) * 100;

  document.querySelector("#allP").innerText = totalPercentage + " %";
}
