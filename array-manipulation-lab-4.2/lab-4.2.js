//alert("JavaScript is connected!");

//task1-- Array Manipulation Basics

// Create an empty array called shoppingList.
// Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
// Write a function called removeLastItem that removes the last item from the shoppingList array.
// Write a function called displayList that logs all items in the shoppingList array to the console.
//  =======================================

let shoppingList = [];
let interpolation = "water";

//Write a function called addItem that takes an item as a parameter
//  and adds it to the shoppingList array

function addItem(item) {
  shoppingList.push(item);
  console.log("my shopping list", shoppingList);
}
shoppingList.push("chocolate", "berries", `${interpolation}`);
addItem("banana");
addItem("bread");

//removes the last item from the shoppingList array.
function removeLastItem() {
  let poppedItem = shoppingList.pop();
  console.log("the removed item is", poppedItem);
  console.log("my shoppingList after removing last item", shoppingList);
}
removeLastItem();

//logs all items in the shoppingList array to the console.
function displayList() {
  console.log("all items in the shopping list ", shoppingList);
}
displayList();

//=====================================================
// Task 2: Filter and Search an Array
// Modify the addItem function to only add the item if it is not already in the shoppingList array.
// Write a function called filterItems that takes a search term as a parameter
// and returns all items in the shoppingList that contain that search term (case-insensitive).

function addItemTask2(item) {
  // Modify the addItem function to only add the item if it is not already in the shoppingList array.
  if (!shoppingList.includes(item)) {
    shoppingList.push(item);
    console.log("my shopping list", shoppingList);
  } else {
    console.log(`${item} already exists in the shopping cart`);
  }
}
addItemTask2("banana");

// Write a function called filterItems that takes a search term as a parameter
searchTerm = "t";
function filterItems(searchTerm) {
  let filteredShoppingList = shoppingList.filter((item) =>
    item.includes(searchTerm),
  );
  console.log("Filtered list is ", filteredShoppingList);
}
filterItems(searchTerm);

//=====================================================
// Task 3: Render the List in the Browser
// Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
// Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.

let input = document.getElementById("shoppingInput");
console.log(input);
let button = document.getElementById("addItem");
console.log(button);
let shoppingListId = document.getElementById("shoppingList");

//function that adds items to the array
//updates the displayed list dynamically when the button is clicked
button.addEventListener("click", function () {
  // Store the input
  let wantedShoppingItem = input.value;
  // Create a new DOM element li inside ul
  let newItem = document.createElement("li");

  // Add input text in the newly created li
  newItem.textContent = wantedShoppingItem;

  // Add the newly created li to the existing ul
  console.log("is my new item printing?");
  shoppingListId.appendChild(newItem);
});

// Write another function that removes the last item
//  and updates the displayed list when a “Remove Last Item” button is clicked.
