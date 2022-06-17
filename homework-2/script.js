function makeObjectDeepCopy(obj) {
  const clone = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      clone[key] = makeObjectDeepCopy(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}
makeObjectDeepCopy({ foo: 'bar', obj: { a: 1, b: 2 } });

function selectFromInterval(arr, intervalA, intervalB) {
  if (!Array.isArray(arr)) {
    throw new Error('Not an array');
  }
  if (
    typeof intervalA === 'undefined' ||
    typeof intervalB === 'undefined' ||
    !Number.isInteger(intervalA) ||
    !Number.isInteger(intervalB)
  ) {
    throw new Error('Your interval does not contain valid fields FROM or TO');
  }

  const isReversed = intervalB <= intervalA;
  const from = isReversed ? intervalB : intervalA;
  const to = isReversed ? intervalA : intervalB;

  const result = [];
  for (let item of arr) {
    if (Number.isNaN(item) || !Number.isInteger(item)) {
      throw new Error('The array contains not a number');
    }
    if (item >= from && item <= to) {
      result.push(item);
    }
  }
  return result;
}
selectFromInterval([1, 3, 5], 5, 2);

const myIterable = {
  from: 1,
  to: 4,
};
myIterable[Symbol.iterator] = function () {
  const { to } = this;
  let { from: current } = this;
  if (
    typeof current !== 'number' ||
    !Number.isInteger(current) ||
    typeof to !== 'number' ||
    !Number.isInteger(to)
  ) {
    throw new TypeError(
      'Your iterator does not contain required fields FROM or TO'
    );
  }
  if (current > to) {
    throw new RangeError('FROM cannnot be greater than TO');
  }

  return {
    next: () => {
      if (current <= to) {
        return {
          value: current++,
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

for (let item of myIterable) {
  console.log(item);
}
