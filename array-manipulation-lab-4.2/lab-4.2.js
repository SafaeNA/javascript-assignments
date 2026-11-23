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
