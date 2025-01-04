var evalRPN = function(tokens) {
    const stack = []; // Stack to store operands

  // Define helper function for arithmetic operations
  const operate = (op, a, b) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return Math.trunc(a / b); // Truncate result toward zero
      default: throw new Error("Invalid operator");
    }
  };

  // Iterate through each token
  for (const token of tokens) {
    if (!isNaN(token)) {
      // If the token is a number, push it onto the stack
      stack.push(Number(token));
    } else {
      // Token is an operator, pop two numbers from the stack
      const b = stack.pop(); // Second operand
      const a = stack.pop(); // First operand
      const result = operate(token, a, b); // Perform the operation
      stack.push(result); // Push the result back onto the stack
    }
  }

  // The final result will be the only element in the stack
  return stack[0];
}

