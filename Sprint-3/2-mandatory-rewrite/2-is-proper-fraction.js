function isProperFraction(numerator, denominator) {

    // add your completed function from key-implement here
    if(denominator === 0){
      return "Denominator cannot be zero"
    }
    if( Math.abs(numerator) < Math.abs(denominator)){
      return true;
    }else{
      return false;
    }
}
console.log(isProperFraction(1, 6));
module.exports = isProperFraction;
