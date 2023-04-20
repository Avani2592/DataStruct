/* FIFO
queue of people 
abstact data type

Enqueue -instart from tail
Dequue -remove from front     ///liner time complexity O(n)
printers
CPU task scheduling
callback queue in javascript runtime

enqueue(element) -add an element to the queue
dequeue() -remove the oldest element from the queue
peek()-get the value of the element at the front of the queue without removing it
isEmpty()-check if the queue is empty
size()-got the number of elements in the queue
print()-visualize the elements in the queue
*/
class Queue{

    constructor()
    {
        this.itmes=[]
    }
    enqueue(element)
    {
        this.itmes.push(element)
    }
    dequeue(element)
    {
        return this.itmes.shift()   //remove element from beginning array
    }
    isEmpty()
    {
        return this.itmes.length===0
    }
    peek()
    {
        if(!this.isEmpty()){
            return this.itmes[0];
        }
        return null
    }
    size()
    {
        return this.itmes.length;
    }
    print()
    {
        console.log(this.itmes.toString())
    }
}
const queue=new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size())
queue.print()
console.log(queue.dequeue())
console.log(queue.peek())

