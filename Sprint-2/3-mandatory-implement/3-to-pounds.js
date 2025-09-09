// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(fromPence) {
  const penceString = fromPence;
  const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
   //takes care of the zero's in front of the decimals when pence are not up to £1 e.g £0.09,
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
  const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
  return `£${pounds}.${pence}`;
}
console.log(toPounds("399p"));
