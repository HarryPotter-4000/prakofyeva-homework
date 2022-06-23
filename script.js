function myFilter(array, callback, thisArg) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback.call(thisArg, array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4];

function isBigEnough(number) {
  return number >= 2;
}

console.log(myFilter(numbers, isBigEnough, this));

function createDebounceFunction(callback, delay) {
  let timeoutId = null;
  let lastArguments = null;
  let lastThis = null;

  return (...args) => {
    lastArguments = args;
    lastThis = this;

    const functionWithContext = () => {
      callback.apply(lastThis, lastArguments);

      lastArguments = null;
      lastThis = null;
    };

    clearTimeout(timeoutId);

    timeoutId = setTimeout(functionWithContext, delay);
  };
}

const debounceLog100 = createDebounceFunction(() => console.log(100), 1000);
const debounceLog200 = createDebounceFunction(() => console.log(200), 200);
const debounceLog400 = createDebounceFunction(() => console.log(400), 400);
debounceLog100();
debounceLog200();
debounceLog400();
