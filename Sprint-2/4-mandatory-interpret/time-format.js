function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// -  3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here : 0,

// c) What is the return value of pad when called for the first time?
// =============> write your answer here: "00"; because pad pads the return value with zeros up to the length of 2.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer : the value is 1
// =============> write your answer here

// - the value of num when pad is called for the last time is 1 because remainingSeconds is 1.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here : "01"

// - the return value assigned to num when pad is called for the last time is "01" because remainingSeconds is 1 therefore when passed to pad, it converts it to string and pad it at the start by "0" for the length of 2. Thats why we have the string "01" as final result.
