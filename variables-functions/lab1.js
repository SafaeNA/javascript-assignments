//Task 1 ==> Flexible String Manipulation with Functions

let firstName = "safaa ";
let lastName = "azz";
//create function
function formatFullName(firstName, lastName) {
  console.log("My name is ", firstName + lastName);
}
formatFullName(firstName, lastName);

//Format the firstName and lastName so that the first letter of each is always capatilized
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1); // This will get the first charter
// // Gets everything after the first character
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
console.log("Capitalize first letter", firstName, lastName);

//Add a condition that checks if either the first or last name is missing.
// If so, return a string saying “Invalid name input.”

lastName = null;
if (firstName == null || lastName == null) {
  console.log("Invalid name imput");
}

//call the function

formatFullName(firstName, lastName);

//Task 2 ==>  Mathematical Operations with Multiple Parameters
let price = 24.99;
let quantity = 5;
let taxRate = 7.99;
let discount = 1;
let totalCost = price * quantity * (1 + taxRate);
let discountedTc = (price * quantity - discount) * (1 + taxRate);

function calculateTotalCost(totalCost) {
  //Ensure that price, quantity, and taxRate are all valid numbers.
  // If any are invalid, return a string: “Invalid input.”
  if (
    !Number.isFinite(price) ||
    !Number.isFinite(quantity) ||
    !Number.isFinite(taxRate)
  ) {
    console.log("Invalid input.");
  } else if (discount > 0) {
    console.log("you have a discount, your new total is ", discountedTc);
  } else {
    console.log("sorry you have no discount, your total is ", totalCost);
  }
}
calculateTotalCost(totalCost.toFixed(2)); //to display only 2 decimal places

//Task 3: Functions with Conditional Logic

let age = 18;
let isEmployed = true;

function checkEligibility(age, isEmployed) {
  //If the person is over 18 and employed, they are eligible.
  //If the person is over 18 but unemployed, they are conditionally eligible.
  //If the person is 18 or younger, they are not eligible.

  if ((age > 18) & (isEmployed == true)) {
    console.log("You are eligible for the program");
  } else if ((age > 18) & (isEmployed == false)) {
    console.log("You are  conditionally eligible for the program");
  } else if (age <= 18) {
    console.log("Sorry, You are not eligible for the program");
  }
}
checkEligibility(age, isEmployed);

//Task 4: Refactoring for Reusability
// Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter.
// If the discount is provided, the function should subtract the discount from the total cost before applying tax.
// If no discount is provided, calculate the total cost as before
