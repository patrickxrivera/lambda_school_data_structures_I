/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.stub = null;
    this.store = [];
  }

  get size() {
    return this.store.length;
  }

  push(item) {
    this.store.push(item);
  }

  pop() {
    if (this.stackHasItem()) {
      return this.store.pop();
    }
  }

  stackHasItem() {
    return this.size > 0;
  }
}

module.exports = Stack;
