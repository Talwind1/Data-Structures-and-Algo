// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let ans = "";
  for (let i = str.length - 1; i > -1; i = i - 1) {
    ans += str[i];
  }
  return ans;
}
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = character + reversed;
//   }
//   return ans;
// }

// function reverse(str) {
// return str.split("").reduce((character, reversed) => {
//   return reversed + character;
// }, "");
// }
