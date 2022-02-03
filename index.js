// module.exports = {};

function stringLength(string) {
  if (string.length > 1 && string.length <= 10) {
    return string.length;
  } else {
    // console.log('hello')
    throw new Error("It didn't work");
  }
}



function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

// module.exports = reverseString;
export {reverseString , stringLength};
