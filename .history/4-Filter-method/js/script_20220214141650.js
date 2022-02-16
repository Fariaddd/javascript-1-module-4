// Filter method

// If you want to filter the data displayed to a user,
// you can use the filter method.
// The filter method is used to create a new array from an existing
// array that the filter method is called on.
//


// The filter method takes a function as an argument. This function receives each item in the array as an argument.
// If the function returns true, the item is added to the new array.

// example 1

const number = [1, 3, 5, 7, 8, 10, 13];
console.log("befor e", number)

const filteredNumber = number.filter(filterNumbers);

function filterNumbers(number) {
    if (number > 5) {
        return true;
    }
}

console.log("After ", filteredNumber);