//A visitor will receive a prompt to enter a list of comma-separated froyo flavors. In the browser console, a table will list how many of each flavor was input.

//------------------------------------------------------------------------------

// Can you prompt the user for froyo flavors and store their result?
// Yes. This variable will prompt the user to enter their desired flavors from the given list of flavors: vanilla,strawberry,coffee
const flavorString = prompt(
  "Please enter what flavor of froyo you would like! Here are your choices: vanilla,strawberry,coffee"
);

// Can you parse the user input into an array of froyo flavors?
// Yes. This will 'split' the user's input of froyo flavors and create an array
const flavorArray = flavorString.split(",");

// Is your logic organized into a function?
// Yes. The function flavorCount will be used to count how many of each input flavor was ordered when prompted
function flavorCount(flavors) {
  // Can you build an object to track which flavors you have observed so far?
  // Yes. We can build an object to track the flavors by using the object's key/value pairs to show what flavors were asked for and how many times those flavors have been asked for.
  let flavorObj = {};

  // As you iterate through the array of flavors, when should that object be updated?
  // This loop will count how many times a certain flavor has appeared
  // If a new flavor appears, it will be added to the object
  // Otherwise it will be added to the count of that stored flavor

  for (let i = 0; i < flavors.length; i++) {
    // In order to avoid errors, we check to see if the flavorObj is empty
    // If so, the current flavor will be added with a count of 1
    if (Object.keys(flavorObj).length === 0) {
      flavorObj[flavors[i]] = 1;
    } else if (flavorObj[flavors[i]] > 0) {
      // Otherwise, if the current flavor of the iteration is greater than 0, add to the count
      flavorObj[flavors[i]]++;
    } else {
      // Otherwise, add that new flavor to the object with a count of 1
      flavorObj[flavors[i]] = 1;
    }
  }

  // Once the iteration is complete, the function will return the object of flavors
  return flavorObj;
}

// Here, we will invoke the function and console.log the results
console.log(flavorCount(flavorArray));
