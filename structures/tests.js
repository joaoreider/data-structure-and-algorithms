const Stack = require("./stack.js");
// STACK

// Teste para o construtor
function testConstructor() {
  const stack = new Stack();
  if (stack.items.length !== 0 || stack.count !== 0) {
    throw new Error('Constructor test failed');
  }
}

// Testando o push
function testPush() {
  const stack = new Stack();
  stack.push(1);
  if (stack.count !== 1 || stack.items[0] !== 1) {
    throw new Error('Push test #1 failed');
  }
  stack.push(2);
  if (stack.count !== 2 || stack.items[1] !== 2) {
    throw new Error('Push test #2 failed');
  }
}

// Testando o pop
function testPop() {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  const removed = stack.pop();
  if (removed !== 2 || stack.count !== 1) {
    throw new Error('Pop test failed');
  }
}

// Testando o peek
function testPeek() {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  const peeked = stack.peek();
  if (peeked !== 2 || stack.count !== 2) {
    throw new Error('Peek test failed');
  }
}

// Testando o isEmpty
function testIsEmpty() {
  const stack = new Stack();
  stack.push(1);
  if (stack.isEmpty() !== false) {
    throw new Error('isEmpty test with non-empty stack failed');
  }
  const stack2 = new Stack();
  if (stack2.isEmpty() !== true) {
    throw new Error('isEmpty test with empty stack failed');
  }
}

// Testando o size
function testSize() {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  const size = stack.size();
  if (size !== 2) {
    throw new Error('Size test failed');
  }
}

// Testando o print
function testPrint() {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  const printed = stack.print();
  if (printed !== '1 2 ') {
    throw new Error('Print test failed');
  }
}

// Testando o clear
function testClear() {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.clear();
  if (stack.count !== 0 || stack.items.length !== 0) {
    throw new Error('Clear test failed');
  }
}

testConstructor();
testPush();
testPop();
testPeek();
testIsEmpty();
testSize();
testPrint();
testClear();
