class Stack {
  static fromIterable(iterable) {
    const isIterable =
      iterable !== null &&
      'length' in iterable &&
      typeof iterable[Symbol.iterator] === 'function';
    if (isIterable) {
      const stack = new Stack(iterable.length);
      for (const item of iterable) {
        stack.push(item);
      }
      return stack;
    } else {
      throw new Error('Invalid iterable value');
    }
  }

  constructor(size = 10) {
    if (Number.isInteger(size)) {
      this.size = size;
      this.position = 0;
      this.storage = [];
    } else {
      throw new Error('Size is invalid');
    }
  }

  push(item) {
    if (this.size > this.position) {
      this.storage[this.position] = item;
      this.position++;
    } else {
      throw new Error('Stack is full');
    }
  }

  pop() {
    if (this.position > 0) {
      const lastItemPosition = this.position - 1;
      const item = this.storage[lastItemPosition];
      delete this.storage[lastItemPosition];
      this.position--;
      return item;
    } else {
      throw new Error('Stack is empty');
    }
  }

  peek() {
    return this.position > 0 ? this.storage[this.position - 1] : null;
  }

  isEmpty() {
    return this.position === 0;
  }

  toArray() {
    const array = [];
    for (let i = 0; i < this.position; i++) {
      array[i] = this.storage[i];
    }
    return array;
  }
}

const stack = new Stack();

module.exports = { Stack };
