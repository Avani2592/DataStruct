
/*
linear data structure
lliner time complexity
Insertion
Deletion
Search
all application of both stacks and queues are applicaitons of linked lists
Image viewer-contimues 
[10|100]->[20|200]->[30|Null]
96          100         200
head point first
[10|100]
[value|key]


1. prepend(Empty list)
    create node
    point head 

2 prepend(Existing list) -assume 3 node last node point null 
3 append -add last node at end

4.Insert - add node at given index( invalid index)

index <0 greater >list
*/



class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null
    }
}
class LinkedList{
    constructor()
    {
        this.head=null;
        this.size=0;
    }

    isEmpty()
    {
        return this.size===0;
    }
    getSize()
    {
        return this.size;
    }
    prepend(value)                        //constant time complexity  O(1)
    {
        const node=new Node(value)        
        if(this.isEmpty())
        {
            this.head=node
        }
        else
        {
            node.next=this.head
            this.head=node
        }
        this.size++

    }
   append(value)    //O(n)
   {
        const node=new Node(value)
        if(this.isEmpty())
        {
            this.head=node
        }
        else
        {
            let prev=this.head
            while(prev.next)
            {
                prev=prev.next
            }
            prev.next=node

        }
        this.size++

   }
   Insert(value,index)
   {
        if(index<0||index>this.size)
        {
                return null
        }
        else
        {
            //index =0
            if(index==0)
            {
                this.prepend(value)
            }else{
                //index>0
                //insert at position 2 
                const node=new Node(value)
                let prev=this.head
                for(let i=0;i<index-1;i++)
                {
                    prev=prev.next
                }
                node.next=prev.next
                prev.next=node
                this.size++
            }
        }

   }
   reverse()
   {
    let prev=null
    let curr=this.head
    while(curr)
    {
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next

    }
    this.head=prev
   }
   removeFrom(index)
   {
         if(index<0||index>this.size)
         {
            return null
         }
         let removeNode
        if(index==0)
        {
             removeNode=this.head
             this.head=this.head.next
           
        }
        else{

            let prev=this.head
            for(let i=0;i<index-1;i++)
            {
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next
        }
        this.size--
        return this.removeNode  
       

    }   
   
    print()  //curr point head travel to end
    {
            if(this.isEmpty())
                { console.log("list is empty") }
            else{
                let curr=this.head
                let listvalues=''
                while(curr){
                    listvalues+=`${curr.value}`
                    curr=curr.next
                }
                console.log(listvalues)
            }


    }
   
}
const linkedlist =new LinkedList();

console.log("Is LinkedList Empty?"+linkedlist.isEmpty())
console.log("LinkedList size?"+linkedlist.getSize());
linkedlist.print()
/*linkedlist.append(10)
linkedlist.print()
linkedlist.append(20)
linkedlist.append(30)
linkedlist.print()
linkedlist.append(40)
linkedlist.print()*/
linkedlist.Insert(10,0)
linkedlist.print()
linkedlist.Insert(20,1)
linkedlist.print()
linkedlist.Insert(30,2)
linkedlist.print()
linkedlist.Insert(40,1)
linkedlist.print()
linkedlist.removeFrom(10)
linkedlist.print()
linkedlist.reverse()
linkedlist.print()