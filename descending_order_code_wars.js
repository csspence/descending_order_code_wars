/*
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

const descendingOrder = (n) => {
  let str = n.toString();
  let array = str.split('');
  let sorted = array.sort(function(a, b) {
    return b - a;
  })
  let numStr = '';
  for(let i = 0; i < sorted.length; i++) {
    numStr += sorted[i];
  }

  return parseInt(numStr);
}