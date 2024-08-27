let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let value1 = "The Sum of " + num1 + " and " + num2 + " is " + sum;

let num3 = 10;
let num4 = 5;
let sub = num3 - num4;

let value2 = "The Sub of " + num3 + " and " + num4 + " is " + sub;

let num5 = 10;
let num6 = 5;
let div = num5 / num6;
let value3 = "The Divison of " + num5 + " and " + num6 + " is " + div;

let num7 = 10;
let num8 = 5;
let mul = num7 * num8;
let value4 = "The Multiplication of " + num7 + " and " + num8 + " is " + mul;

document.getElementById("add").innerText =
  value1 + "\n" + value2 + "\n" + value3 + "\n" + value4;

// second task

let message = "Value after variable declaration is Undefined";
let initial = 5;
let initialize = initial + 1;
let additon = initialize + 7;
let decrement = additon - 1;
let remainder = decrement % 3;

let whole =
  message +
  "\n" +
  "Initial value is: " +
  initial +
  "\n" +
  "Value after increment: " +
  initialize +
  "\n" +
  "Value after addtion: " +
  additon +
  "\n" +
  "Value after decriment: " +
  decrement +
  "\n" +
  "The remainder is: " +
  remainder;

document.getElementById("whole").innerText = whole;

// task 3

let ticket = 600;
let buy = 5;
let total = ticket * buy;
let cost = "The price of one movie ticket is " + ticket;
let movie =
  "Total cost to buy " + buy + " tickets to a movie is " + total + "PKR";

document.getElementById("movie").innerText = cost + "\n" + movie;

// task 4 "Table"

let tableno = 9;

let table =
  " Table of " +
  tableno +
  "\n" +
  tableno +
  " x " +
  1 +
  " = " +
  tableno * 1 +
  "\n" +
  tableno +
  " x " +
  2 +
  " = " +
  tableno * 2 +
  "\n" +
  tableno +
  " x " +
  3 +
  " = " +
  tableno * 3 +
  "\n" +
  tableno +
  " x " +
  4 +
  " = " +
  tableno * 4 +
  "\n" +
  tableno +
  " x " +
  5 +
  " = " +
  tableno * 5 +
  "\n" +
  tableno +
  " x " +
  6 +
  " = " +
  tableno * 6 +
  "\n" +
  tableno +
  " x " +
  7 +
  " = " +
  tableno * 7 +
  "\n" +
  tableno +
  " x " +
  8 +
  " = " +
  tableno * 8 +
  "\n" +
  tableno +
  " x " +
  9 +
  " = " +
  tableno * 9 +
  "\n" +
  tableno +
  " x " +
  10 +
  " = " +
  tableno * 10;

document.getElementById("table").innerText = table;






// task 5 "Temperature Converter"

let celcius = 25;
let FarConversion = (celcius * 9) / 5 + 32;
let celResult = celcius + " centigrade is " + FarConversion + " Fahrenhiet.";

let Fahrenhiet = 70;
let celConversion = (((Fahrenhiet - 32) * 5) / 9).toFixed(2);
let FarResult = Fahrenhiet + " Fahrenhiet is " + celConversion + " centigrade.";

document.getElementById("Temp").innerText = celResult + "\n" + FarResult;






// task 6 "Shopping list"

let item1 = 650;
let item2 = 100;
let item1quantity = 3;
let item2quantity = 7;
let shippingCharges = 100;
let totalcost = item1 * item1quantity + item2 * item2quantity + shippingCharges;

let shoppingList =
  "Price of item 1 is " + item1 + "\n" + "Price of item 2 is " + item2 + "\n"+
  "Quantity of item 1 is " + item1quantity + "\n" + "Quantity of item 2 is " + item2quantity +
  "\n" + "Shipping Charges " + shippingCharges + "\n" + "Total Cost of your order is " + totalcost ;


  document.getElementById("Shopping").innerText = shoppingList;






// task 7 "Percentage Calculator"


let totalMarks = 1100;
let ObtMarks = 830;
let Percentage = ((ObtMarks / totalMarks) * 100).toFixed(2);

let stuResult = "Total Marks: " + totalMarks + "\n" + "Obtained Marks: " + ObtMarks + "\n" +
              "Percentage: " + Percentage + "%";


document.getElementById("Percentage").innerText = stuResult;




// task 8 "Currency Converter"

let USD = 10 // base Currency;
let SAR = 25;

let change = USD * 104.80 + SAR * 28
let exhange = "Total Currency in PKR: " + change;

document.getElementById("change").innerText = exhange;




// task 9



let number = (((2 + 5) * 10) / 2);

document.getElementById("number").innerText = number;




// task 10 "Age Calculator"


let currentYear = 2024;
let birthYear = 2005 ;
let age = currentYear - birthYear;

let yourAge = "Current Year: " + currentYear + "\n" + "Birth Year: " + birthYear + "\n"+
              "Your age: " + age;

document.getElementById("age").innerText = yourAge;





// task 11 "The Geometrizer"


let circleRadius = 20;
let circumference = ((2 * 3.142) * circleRadius).toFixed(2);
let circleArea = 3.142 * (circleRadius ** 2);

let Geometrizer = "Radius of a Circle : " + circleRadius +"\n" + "The Circumference is : " + circumference +
                   "\n" + "The Area of Circle is : " + circleArea;

document.getElementById("Geometrizer").innerText = Geometrizer;






// task 12 "Life time supply "


let snack = " Chocolate chip";
let currentAge = 18;
let maxAge = 65 ;
let perDay = 1;
let maximum = (perDay * (365 * (maxAge - currentAge)));

let lifeTime = "Favorite sanck: " + snack + "\n" + " Current age: " + currentAge + "\n" +
                " Estimated maximum age: " + maxAge + "\n" + " Amount of snack per day: " + perDay +
                "\n" + "You will need " + maximum + snack + " to last you until the ripe old age of " + maxAge;


document.getElementById("life").innerText = lifeTime;                