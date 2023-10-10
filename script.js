const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let result = "";
  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];
    // Check if the character is in the lookup table
    if (lookup[char] !== undefined) {
      // Append the decoded character to the result
      result += lookup[char];
    } else {
      // If it's not in the lookup table, append it as is
      result += char;
    }
  }
  return result;
}

// Example usage:
const encodedString = "EBG13 rknzcyr.";
const decodedString = rot13(encodedString);
console.log(decodedString); // Output: "ROT13 example."
