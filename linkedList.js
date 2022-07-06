class LinkedListItem {
  constructor(value, nextItem = null) {
    this.value = value;
    this.nextItem = nextItem;
  }
}

class LinkedList {
  static fromIterable(iterable) {
    const isIterable =
      iterable !== null && typeof iterable[Symbol.iterator] === 'function';
    if (isIterable) {
      const result = new LinkedList();
      for (const item of iterable) {
        result.append(item);
      }
      return result;
    } else {
      throw new Error('Invalid iterable value');
    }
  }

  #firstItem;
  #lastItem;

  constructor() {
    this.#firstItem = null;
    this.#lastItem = null;
  }

  append(value) {
    const item = new LinkedListItem(value);
    if (this.#lastItem) {
      this.#lastItem.nextItem = item;
    }
    this.#lastItem = item;
    if (!this.#firstItem) {
      this.#firstItem = item;
    }
  }

  prepend(value) {
    const item = new LinkedListItem(value, this.#firstItem);
    this.#firstItem = item;
    if (!this.#lastItem) {
      this.#lastItem = item;
    }
  }

  find(value) {
    let result = null;
    let current = this.#firstItem;
    while (current) {
      if (current.value === value) {
        result = current.value;
        break;
      }
      current = current.nextItem;
    }
    return result;
  }

  toArray() {
    const result = [];
    let current = this.#firstItem;
    while (current) {
      result.push(current.value);
      current = current.nextItem;
    }
    return result;
  }
}

const linkedList = new LinkedList();

module.exports = { LinkedList };
