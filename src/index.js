module.exports = function toReadable (number) {
  let numToString = String(number);
  let result = "";
  let lastI = numToString.length - 1;
  if(number == 0)
    return "zero"
  for(let i = lastI; i >= 0; i--)
  {
    let currentNum = Number(numToString[i]);
    if(i == lastI)
    {
      if(currentNum == 1)
        result = "one";
      if(currentNum == 2)
        result = "two";
      if(currentNum == 3)
        result = "three";
      if(currentNum == 4)
        result = "four";
      if(currentNum == 5)
        result = "five";
      if(currentNum == 6)
        result = "six";
      if(currentNum == 7)
        result = "seven";
      if(currentNum == 8)
        result = "eight";
      if(currentNum == 9)
        result = "nine";
    }
    if(i == lastI-1)
    {
      if(result == "")
      {
        if(currentNum == 1)
            result = "ten";
        if(currentNum == 2)
            result = "twenty";
          if(currentNum == 3)
            result = "thirty";
          if(currentNum == 4)
            result = "forty";
          if(currentNum == 5)
            result = "fifty";
          if(currentNum == 6)
            result = "sixty";
          if(currentNum == 7)
            result = "seventy";
          if(currentNum == 8)
            result = "eighty";
          if(currentNum == 9)
            result = "ninety";
      }
      else{
        if(currentNum == 1){
          if(result == "one")
            result = "eleven";
          if(result == "two")
            result = "twelve";
          if(result == "three")
            result = "thirteen";
          if(result == "four")
            result = "fourteen";
          if(result == "five")
            result = "fifteen";
          if(result == "six")
            result = "sixteen";
          if(result == "seven")
            result = "seventeen";
          if(result == "eight")
            result = "eighteen";
          if(result == "nine")
            result = "nineteen";
        }
        if(currentNum == 2)
          result = "twenty " + result;
        if(currentNum == 3)
          result =  "thirty " + result;
        if(currentNum == 4)
          result = "forty " + result;
        if(currentNum == 5)
          result = "fifty " + result;
        if(currentNum == 6)
          result = "sixty " + result;
        if(currentNum == 7)
          result =  "seventy " + result;
        if(currentNum == 8)
          result = "eighty " + result;
        if(currentNum == 9)
          result = "ninety " + result;
        }
    }
    if(i == lastI-2)
    {
      if(currentNum == 1)
        result = "one hundred " + result;
      if(currentNum == 2)
        result = "two hundred " + result;
      if(currentNum == 3)
        result =  "three hundred " + result;
      if(currentNum == 4)
        result = "four hundred " + result;
      if(currentNum == 5)
        result = "five hundred " + result;
      if(currentNum == 6)
        result = "six hundred " + result;
      if(currentNum == 7)
        result = "seven hundred " + result;
      if(currentNum == 8)
        result = "eight hundred " + result;
      if(currentNum == 9)
        result = "nine hundred " + result;
    }
  }
  return result.trim();
}
