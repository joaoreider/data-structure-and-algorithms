
class Stack {
  constructor(){
    this.items = [];
    this.count = 0;
  }

  // Add element to top of stack
  push(element){
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  // Return and remove top element in stack
  // Return undefined if stack is empty
  pop(){
    if (this.count == 0) return undefined
    let deleteItem = this.items[this.count-1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem
  }
  
  // Check top element in stack
  peek(){
    let element = this.items[this.count-1];
    console.log(`${element} is on the top!`);
    return element
  }
  
  // Check if the stack is empty
  isEmpty(){
    console.log(this.count === 0 ? 'stack is empty!': "stack is not empty!")
    return this.count === 0
  }

  // check size of stack
  size(){
    console.log(`${this.count} elements in stack`)
    return this.count
  }

  // print elements in stack
  print(){
    let str = ''
    for(let i=0; i<this.count; i++){
      str+= this.items[i] + ' '
    }
    console.log(str)
    return str

  }

  // clear stack
  clear(){
    this.items = []
    this.count = 0
    console.log('stack cleared')
    return this.items
  }
}

module.exports = Stack