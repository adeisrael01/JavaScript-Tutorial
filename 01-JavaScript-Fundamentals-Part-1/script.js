//WELCOME TO JAVASCRIPT TUTORIAL

//TITLE: JavaScript Fundamentals Part 1
//...............................................................

//1. What is JavaScript?
//JavaScript is a high level object-oriented, multi-paradigm programming language
//Explaining the details
//High level: You dont have to worry about complex stuff like in javascript. e.g. memory management when executing code. it make the language a lot easier to write and to learn.
//Multi-paradigm: Javascript is so flexible and versatile that we can use different style of programming such as imperative and declarative programming(ways of structuring our code).
//Object-Oriented: It is mostly base on the concept of Object for storing most kind of data.
//Programming Language: is a tool that allows us to write codes that instruct a computer to do something.

//...............................................................

//2. History of JavaScript
//In 1995, Brendan Eich Creates the first javascript in 10 days, it was called MOCHA
//In 1996, MOCHA chnages to LiveScript then to JavaScript to attract JAVA(oldest language at that time) developers but it has nothig to do with JAVA.
//In 1997, Javascript was standardized with the release of ECMAScript 1 (ES!). ECMAScript is the standard, javasript is the language.
//In 2009, ECMAScript 5(ES5) was released with a lot of new features
//In 2015, ECMAScript 6(ES6/ES2015) was released which is the biggest update to the language ever. ECMAScript changed to annual release cycle in that same year in order to ship less features per update.
//In 2016, ECMASCript (ES2016) was released which will continue like that till earth remain.
//Es2017, ES2018, ES2019, ES2020, ES2021, ES2022, ES2023.....

// How JavaScript work in the modern day
//Javascript has fundamental features of  DON'T BREAK THE WEB in which features from ES1 can still work in the latest release of javascript. Old features are never removed but has incremental update(new version). Javascript are BACKWARD COMPACTIBLE AND NOT FORWARD COMPACTIBLE.
//To guide against the backward compactibility in javascript,do the follwing:
//i. During Development: Use the latest Google Chrome or Browser
//ii. During Production: Use Bable to Transpile(transpiling) and Polyfill(polyfilling) your code(converting back to ES5 to ensure browser compactibility for all users)

//...............................................................

//3. Linking JavaScript and HTML file
//Javascript can be link with an HTML File in two(2) ways
//(i) Inline Script: It is use with script tag <script></script> located in the head section of html. The only advantage of this is that we don't have to load another file.

//(ii) External Script: It is created sepeartely from an HTML file but connected with script tag <script></script> with source(src) specifing the location. E.g <script src="script.js"></script>

//...............................................................

//4. Variable Naming In JavaScript
//camelCasing is the convention used in JS for variable naming; letter, number, underscore, dollar sign are used.
//variable Name should not start with a number, uppercase, JS reserved keyword(e.g if, functon e.t.c).
//NB:i) Use a descriptive name when naming a variable i.e. variable name should be related to the value it is holding.
// ii) Starting a variable name with capital letter is use for constant that we know it will never change e.g. let PI = 3.1415

//...............................................................

//5. Values and Variable
//All values in javascript are either Object or Primitive
// Seven(7) Types Of Primitive Data Types
//Number, String, Boolean, Undefined, Null, Symbol(ES2015), BigInt(ES2020)
const myAge = 30; //myName is variable name while 30 is the value
const myName = "My Name Is Adediran Israel Okikijesu";
console.log(myName, myAge); //logging variable to the console

//6. Declaring and Reassigning of variables
//a. using let to declear a variable
let isYourNameIsrael = true; // declaring a variable
isYourNameIsrael = false; // reassigining a variable
console.log(isYourNameIsrael);
//b. using var can also work as decalring and reassigning a variable. just like let
var atwork = false;
atwork = true;
console.log(atwork);
//c. using const to declare
const yourFirstname = "Israel";
// yourFirstname = "okikijesu"; // this will throw an error because any variable declare with const can not be reassign.
//NB: const can not be declare empty. Always use const as default variable declaration unless variable will change later. Having a variable that do not change helps to guide against bugs.

//7. JavaScript Basic Operators
//a. typeof Operator
console.log(typeof myName, typeof myAge, typeof isYourNameIsrael);

//b. Mathematical Operator
const thisYear = 2024 - 1993;
const thisMonth = 2024 + 4;
let newAge = thisYear / 3;
console.log(thisYear, thisMonth, newAge);
const myAddress = "I live in Ibadan";
console.log(myName + ", " + myAddress);

let newMonth = 2 ** 4; // 2 to the power of 4, 2*2*2*2
console.log(newMonth);

//c. Asignment Operator
newAge += 2; //newAge = newAge + 2;
newAge -= 2; //newAge = newAge - 2;
newAge *= 2; //newAge = newAge * 2;
newAge /= 2; //newAge = newAge / 2;
newAge++; //newAge = newAge + 1;
newAge--; //newAge = newAge - 1;

//d. Comparison Operator
//It produces boolean values i.e. TRUE or FALSE
const firstNum = 3;
const secondNum = 15;
const firstName = "Israel";
const lastName = "Adediran";
console.log(firstName != lastName); //not equal to
console.log(firstName !== lastName); //not precisely equal to
console.log(firstNum <= secondNum); //less than or equal to
console.log(firstNum >= secondNum); //greater than or equal
console.log(firstNum < secondNum); //less than
console.log(firstNum > secondNum); //greater than
console.log("z" > "Z"); // this will be "true" because lowercase is greater than uppercase

//e. Equality Operator (== VS ===)
//It is use to check if two values are actually equal instead of been greater or less than each other. We have two types of equality
//It will return a true or false value like comparison operator
//(i) Stricitly/Precisely Equal To(===)
// it is true when both sides of the operator are exactly the same data type and value. it does not perfrom type coercion
const calcAge = 37;
if (calcAge === 37) console.log("You are an adult...Strict Equal"); //one line of if block like this do not need curly braces({})
//NB: Always use strict equality operator as a general rule. Convert data manually instead of relying on loose equal operator

//(ii)Loose Equal To(==)
//It is true when both sides are of the same value even when they are not of the same data type.  It perform type coercion
if (calcAge == "37") console.log("You are an adult...Loose Equal"); //37 == "37", string "37" was coverted to a number which make it true"

//CODING CHALLENGE 1
//Simple Calculator
// const num1 = Number(prompt("Enter first number..."));
// const operator = prompt("+, -, *, /");
// const num2 = Number(prompt("Enter Second Number"));
// let result;
// if (isNaN(num1) || isNaN(num2)) {
//   alert("Wrong Input! Refresh page and input data again");
// } else if (operator === "+") {
//   result = Number(alert(num1 + num2));
// } else if (operator === "-") {
//   result = Number(alert(num1 - num2));
// } else if (operator === "*") {
//   result = Number(alert(num1 * num2));
// } else {
//   result = Number(alert(num1 / num2));
// }

//f. The Conditional (Ternary) Operator (?)
//Conditional operator is also called ternary operator because it has three(3) parts(1 ? 2 : 3). It is wriiten as (?).
//The Value on the left determine what will run. Ternary Operator can write if/else statement in one line but it is not a replacement for if/esle, we still need if/else especially when we want to erite bigger piece of code. Tenerary Operator is use to take quick decisions.
//Ternary Operator is an expression
const locate = "ibadan";
locate === "lagos" ? console.log("Qualify") : console.log("Not Qualify"); //ternanry expression not nstored into a variable
const qualifyCandidate = locate === "lagos" ? "Qualify" : "Not Qualify"; //ternanry expression stored into a variable
console.log(qualifyCandidate);

let matureAge = 17;
console.log(
  `${
    matureAge >= 18
      ? `You Are Free To Drink`
      : `You Are Free To Drink ONLY After ${18 - matureAge} Years`
  }`
); // using ternary operator inside template literals

//using if/else version of the ternary operator above
let qualifyCandidate2;
if (locate === "lagos") {
  qualifyCandidate2 = "Qualify";
} else {
  qualifyCandidate2 = "Not Qualify";
}
console.log(qualifyCandidate2);

//NB: Precedence is important when using operators. The most precedence operator will run first. All mathemathics operator will always run before comparison operator. Examples below
const averageNum1 = firstNum + secondNum / 2; // the precedence number of division makes the result to be incorrect, division was calculated first.
const averageNum2 = (firstNum + secondNum) / 2; // bracket/parenthesis/grouping precedence correct the mistake as it was calculated first.
console.log(averageNum1, averageNum2);

//CODING CHALLENGE 2
//a. TEST DATA 1
const massMarks1 = 78;
const heightMarks1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const BMIMarks1 = massMarks1 / heightMarks1 ** 2; // OR massMarks1 / (heightMarks1 * heightMarks1)
const BMIJohn1 = massJohn1 / heightJohn1 ** 2; // OR massJohn1 / (heightJohn1 * heightJohn1)
const marksHigherBMI1 = BMIMarks1 > BMIJohn1;
console.log(BMIMarks1, BMIJohn1, marksHigherBMI1);

//b. TEST DATA 2
const massMarks2 = 95;
const heightMarks2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMarks2 = massMarks2 / heightMarks2 ** 2; // OR massMarks2 / (heightMarks2 * heightMarks2)
const BMIJohn2 = massJohn2 / heightJohn2 ** 2; // OR massJohn2 /(heightJohn2 * heightJohn2);
const marksHigherBMI2 = BMIMarks2 > BMIJohn2;
console.log(BMIMarks2, BMIJohn2, marksHigherBMI2);

//CODING CHALLENGE 3
const bill = 430;
const calcTip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const showTotal = `The bill was ${bill}, the tip was ${calcTip} and the total value ${
  bill + calcTip
}`;
console.log(showTotal);
//TEST DATA: 275, 40, 430

//8. Template Literals And Strings
//Template literal accept multiple pieces of value into one final string. It work with backstick(` `)
//a. how to write regular strings with template literal
const myFirstName = "Israel";
const myJob = "Senior Assistant Technologist";
const birthYear = 1990;
const year = 2024;

const myFullInfo1 =
  "I'm " + myFirstName + ", a " + (year - birthYear) + " years old " + myJob; //spaces before or after word to create space
const myFullInfo2 = `I'm ${myFirstName}, a ${
  year - birthYear
} years old ${myJob}`; //easy writing with template literal
console.log(myFullInfo1, typeof myFullInfo1);
console.log(myFullInfo2, typeof myFullInfo2);

//b.how to write multiline strings with template literal backtick
console.log(`My name is 
Adediran
Israel`); // new line
console.log(`My name is     Adediran Israel`); //new tab
console.log(`My name is       
        Adediran Israel`); // new line and new tab
//c. how to write multile strings before ES6(old version)
console.log("My name is \n Adediran \n Israel"); //new line
console.log("My name is \t Adediran Israel"); //new tab
console.log("My name is \n\t Adediran Israel"); //new line and new tab

//9. Taking Decisions: if/Else Statements
//If/Else Statement is called a control structure because it helps to have a control over a way our code is executed. It create true or false value. else block is optional. variable has to be declare outside the if/else statement block before it can be access inside it.
const drivingAge = 28;
if (drivingAge >= 18) {
  console.log(
    `Congratulations, You are ${drivingAge}!\n You can learn how to drive🚗` //symbol = window key + full stop(.)
  );
} else {
  console.log(
    `Opps, you are ${drivingAge}!\n Wait for another ${
      18 - drivingAge
    } year before you can learn how to drive🚗`
  );
}

const yearOfBirth = 2012;
let century; //variable has to be declared outside if/else statement before it can be access inside it
if (yearOfBirth <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//CODING CHALLENGE 4
//Using BMI Data From CHALLENGE 1
if (BMIJohn1 > BMIMarks1) {
  console.log(`JohnBMI(${BMIJohn1}) is Higher Than MarksBMI(${BMIMarks1})`);
} else {
  console.log(`MarksBMI(${BMIMarks1}) is Higher Than JohnBMI(${BMIJohn1})`);
}

//10. Type Conversion and Coersion
//a. Type Conversion(explicit/manual conversion)
//it is a manual conversion from one data type to another
//Two(2) wqys of conversion in javascript
//i. Conversion to number with Number() function
let inputSupply = "1993";
inputSupply = Number(1993);
console.log(inputSupply + 38); //converted to number
console.log(Number("Israel")); //you can not convert alphabet to a number, it will return NAN(Not A Number)

//ii. Conversion to strings with String() function
inputSupply = String(38); //number converted to string
console.log(typeof inputSupply);
//NB: Data from Input HTML Element usually come as string

//b. Type Coercion(implicit/automatic conversion by javascript)
//Type coersion is an automatic data conversion by javascript(implicit). In other word, type coersion occur when opeator is applied to wrong type of value, Javascript convert the value to the type it needs, using a set of rules in which the result is not what you expect.
//Two(2) wqys of coercion in javascript
//I. mathematical operators coercion
console.log("I'm " + 30); //String + Number = String
console.log("23" - "10"); //Strings of Number - Strings of Number = Number. Using minus on string of number will be number.
console.log(NaN + NaN); //NaN + NaN = NaN
console.log("1993" + 38); // String of Number + Number = String (Concatenation occur)
console.log("23" - 10); //Strings of Number - Number = Number
console.log("23" * "10"); //Strings of Number * Strings Of Number = Number
console.log("23" / "10"); //Strings of Number / Strings Of Number = Number

//II. Boolean() function coercion
//Truthy And Falsy Values
//(i)Truthy values are values that are true. Example incluse; a number that is not 0, any strings that is not an empty string, any object that is empty.

//(ii) Falsy values are values that are not exactly false but will become false when we convert them into a boolean with boolean function. There are Five(5) Falsy Value: 0, empty strings, undefined, null, NAN
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));
// The only two times javascript do type coerciosn to boolean is when you are using (i) logical Operators (ii) logical Contexts(if/else statement). Example Below
const money = 0;
if (money) {
  //javascript convert any data in if()context to boolean using truthy and falsy values
  console.log(`Don't Spend It All`);
} else {
  console.log(`Get A Job!`);
}
//NB: Conversion to Boolean is implicit not explicit

//11. Boolean Logic
//Boolean Logic is a branch of computer science that use TRUE and FALSE to solve complex logicals. It uses logical operator to combine TRUE and FALSE values just like using mathematical operaors to combine numeric values.
//Basic Boolean Logical Operator Include:
const hasDriversLicense = true;
const hasGoodVision = false;
//a. AND Operator(&&)
//The result here will be TRUE if the values in all sides of the operator are TRUE.
//TRUE & TRUE = TRUE
//TRUE & FALSE = FALSE
//FALSE & FALSE = FALSE
console.log(hasDriversLicense && hasGoodVision); //Answer is FALSE

//b. OR Operator(||)
//The result here will be TRUE if either one or all values in all sides of the operator are TRUE.
//TRUE || TRUE = TRUE
//TRUE || FALSE = TRUE
//FALSE || FALSE = FALSE
console.log(hasDriversLicense || hasGoodVision); //Answer is TRUE
//c. NOT Operator(!)
//it is an operaor that takes one value. NOT Operator flips/invert/opposite the value given to it.
//!TRUE = FALSE
//!FALSE = TRUE
console.log(!hasDriversLicense); //invert to FALSE

//CODING CHALLENGE 5
//Testing The Use of Boolean Logic
//DATA 1
// const avgScoreDolphins = (96 + 108 + 89) / 3;
// const avgScoreKoalas = (88 + 91 + 110) / 3;
// console.log(avgScoreDolphins, avgScoreKoalas);

//DATA 2
// const avgScoreDolphins = (97 + 112 + 101) / 3;
// const avgScoreKoalas = (109 + 95 + 123) / 3;
// console.log(avgScoreDolphins, avgScoreKoalas);

//DATA 3
const avgScoreDolphins = (80 + 112 + 101) / 3;
const avgScoreKoalas = (80 + 112 + 101) / 3;
console.log(avgScoreDolphins, avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
  console.log("Dolphins Team Won The Trophy 🏆");
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
  console.log("Koalas Team Won The Trophy 🏆");
} else if (
  (avgScoreDolphins === avgScoreKoalas) &
  (avgScoreDolphins >= 100) &
  (avgScoreKoalas >= 100)
) {
  console.log("Both Wins The Trophy🏆");
} else {
  console.log("No One Wins The Trophy🏆");
}

//12. The Switch Statement
//it is an alternative way of writing if/else statement where one value is been compared to multiple options. it make use of strict equality operator(===) to compare.
//without the break, code continue to execute but stop when there is a break. this help to differentiate between the code
const day = "Sunday";

switch (day) {
  case "Monday": //day === "monday"(Switch statement compare using strict equality)
    console.log("I will be going to work by 7am");
    break; //help to diffentiate between each line of code
  case "Tuesday":
  case "Wednesday":
    break;
  case "Thursday":
    console.log("I will be coding all through the day");
    break;
  case "Friday":
    console.log("I will be coding and them going to church");
    break;
  case "Saturday":
    console.log("I will be coding at home all through the day");
    break;
  case "Sunday":
    console.log("I will be going to church");
    break;
  default:
    console.log("it is not a valid day");
}

//If/Else Statement Version
if (day === "Monday") {
  console.log("I will be going to work by 7am");
} else if (day === "Tuesday" || day === "Wednesday") {
  console.log("I will be going to church in the evening");
} else if (day === "Thursday") {
  console.log("I will be coding all through the day");
} else if (day === "Friday") {
  console.log("I will be coding and them going to church");
} else if (day === "Saturday") {
  console.log("I will be coding at home all through the day");
} else if (day === "Sunday") {
  console.log("I will be going to church");
} else {
  console.log("it is not a valid day");
}

//NB: Switch Statement is much designed to test equality and not for comparing values. They work like if/else statement but with little less and more readable codes. You can use the one you like out of switch statement and if/else statement, its down to your preference

//13. Statements And Expressions
//a. Expression
//Expression is a piece of code that produces value
//Operators produces value which means it is an expression
2 + 5; // this is an expression beause they can produce value on their own
1991; //this is an expression because it will produce result
true && false && !true; // this will produce a boolean result

//b. Statement
//Statement is like a bigger piece of code executed and which does not produces value on itself. Codes are written in sequence of action in which actions to be exceuted are statements.
//Statement are full sentences that translate into action.it do end with semi-colon(;)
//JavaScript expect statement and expression in different places..E.g.Template literal can only take expression and not a statement.

if (23 > 10) {
  const str = "It is true"; //"It is true" is an expression but the whole line of code is a statement
} //this if/else does not really produces a value but create a variable called str, that is why it is called if/else statement.
