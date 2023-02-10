//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super();
    this.message = `Expression should only consist of integers and +-/* characters and not ${arg}`;
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.message = "Expression should not have an invalid combination of expression";
    this.name = "InvalidExprError";
  }
}

function evalString(expression) {
  try {
    const regex = /^[+-/*]+|[+-/*]+$|\+{2,}|-{2,}|\*{2,}|\/{2,}/g;
    if (regex.test(expression)) {
      throw new InvalidExprError();
    }
    if (expression.startsWith("+") || expression.startsWith("*") || expression.startsWith("/")) {
      throw new SyntaxError("Expression should not start with invalid operator");
    }
    if (expression.endsWith("+") || expression.endsWith("*") || expression.endsWith("/") || expression.endsWith("-")) {
      throw new SyntaxError("Expression should not end with invalid operator");
    }
    return eval(expression);
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      throw error;
    }
    throw new OutOfRangeError(expression[error.pos]);
  }
}
