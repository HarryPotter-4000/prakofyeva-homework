function concatStrings(...args) {
  const argFilter = (item) => typeof item === 'string';
  return (...newArgs) => {
    const filtered = newArgs.filter(argFilter);
    if (!filtered.length) {
      return args.filter(argFilter).join('');
    }
    return concatStrings(...args, ...newArgs);
  };
}

concatStrings('first')('second')('third')();

class Calculator {
  constructor(firstNumber, secondNumber) {
    this.setX(firstNumber);
    this.setY(secondNumber);
  }
  setMember(isX, value) {
    const isValid = typeof value === 'number' && Number.isFinite(value);
    if (isValid) {
      if (isX) {
        this.firstNumber = value;
      } else {
        this.secondNumber = value;
      }
    } else {
      throw new Error('Your value is not a valid number');
    }
  }
  setX = (firstNumber) => {
    this.setMember(true, firstNumber);
  };
  setY = (secondNumber) => {
    this.setMember(false, secondNumber);
  };
  logSum = () => {
    console.log(this.firstNumber + this.secondNumber);
  };
  logMul = () => {
    console.log(this.firstNumber * this.secondNumber);
  };
  logSub = () => {
    console.log(this.firstNumber - this.secondNumber);
  };
  logDiv = () => {
    if (this.secondNumber === 0) {
      throw new Error('Divisor is zero');
    } else {
      console.log(this.firstNumber / this.secondNumber);
    }
  };
}

const calculator = new Calculator(12, 3);
calculator.logSum();
calculator.logDiv();
calculator.setX(15);
calculator.logDiv();
const logCalculatorDiv = calculator.logDiv;
logCalculatorDiv();
calculator.setY(444n);
