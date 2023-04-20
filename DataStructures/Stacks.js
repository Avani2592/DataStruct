/*

last element insert into the stack is first element to be removed
stack of plates...
stack is an abstract data type.
Stack is greate for trace back history. Browser history tracking. undo operation when typing .Expression conversions .call stack in javascript runtime
 LIFO pattern.
an array with its push and pop methods
push() to insert an element into top of the stack
pop() to remove an element from top of the stack
top() Returns the top element of the stack.
isEmpty() returns true is stack is empty else false
size() returns the size of stack
peek() return top items
*/
class Stack{

    constructor(){
        this.items=[]

    }
    push(element)
    {
        this.items.push(element);
    }
    pop()
    {
      return this.items.pop();
    }
    peek()
    {
        return this.items[this.items.length-1]
    }
    isEmpty()
    {
        return this.items.length===0

    }
    size()
    {
        return this.items.length
    }
    print()
    {
        console.log(this.items.toString())
    }

}
const stack=new Stack()
console.log(stack.isEmpty())
stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.size())
stack.print()
console.log(stack.pop())
console.log(stack.peek())