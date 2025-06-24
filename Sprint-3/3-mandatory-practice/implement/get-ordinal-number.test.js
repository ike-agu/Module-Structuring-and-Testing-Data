const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
 });

test("Should return '2nd' for 2",()=>{
  expect(getOrdinalNumber(2)).toEqual("2nd");
})

test("Should return '3rd' for 3",()=>{
  expect(getOrdinalNumber(3)).toEqual("3rd");
})

test("Should return '4th' for 4",()=>{
  expect(getOrdinalNumber(4)).toEqual("4th");
})

test("Should return '5th' for 5",()=>{
  expect(getOrdinalNumber(5)).toEqual("5th");
})

test("Should return '6th' for 6",()=>{
  expect(getOrdinalNumber(6)).toEqual("6th");
})
test("Should return '7th' for 7",()=>{
  expect(getOrdinalNumber(7)).toEqual("7th");
})

test("Should return '8th' for 8",()=>{
  expect(getOrdinalNumber(8)).toEqual("8th");
})

test("Should return '9th' for 9",()=>{
  expect(getOrdinalNumber(9)).toEqual("9th");
})

test("Should return '10th' for 10",()=>{
  expect(getOrdinalNumber(10)).toEqual("10th");
})

test("Should return '11th' for 11",()=>{
  expect(getOrdinalNumber(11)).toEqual("11th");
})
