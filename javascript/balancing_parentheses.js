function balancingParentheses(string) {
  if (string.includes("()")) {
    return balancingParentheses(string.replace("()", ""))
  }
  return string.length
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("Expecting: 2");
  console.log(balancingParentheses(')('));

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("Expecting: 2");
  console.log(balancingParentheses(')((((()))((())))()(()))('));

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file

// And a written explanation of your solution
