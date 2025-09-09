const minimum = 1;
const maximum = 100;
const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num)

/*
- num represents a random integer between 1 and 100 (inclusive).

.......The expression: ...........
- Math.random():  generates a floating-point number between 0 (inclusive) and 1 (exclusive).
- (maximum - minimum + 1) → gives the size of the range. In this case: 100 - 1 + 1 = 100.
- Math.random() * (maximum - minimum + 1) → scales the random number into the range 0 up to but not including 100.
- Math.floor(...) → rounds down to the nearest integer. Example: 56.7 → 56.
- + minimum → shifts the range so it starts at minimum (1). So the result is between 1 and 100 (inclusive).
*/
