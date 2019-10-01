const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Ingredients:\n")
var list = 0;
while (list < ingredients.length) {
  console.log(ingredients[list])
  list++
}
// Write a for loop that prints out the contents of ingredients:
console.log("\nFor Loop Ingredients:\n")
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nIngredients Backwards:\n")
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
console.log("Ingredients:\n")
var Whilelist = 7;
while (Whilelist = ingredients.length - 1) {
  console.log(ingredients[Whilelist])
  Whilelist--
}